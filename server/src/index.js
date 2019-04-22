import "dotenv/config";
import cors from "cors";
import express from "express";

import { getSearchResults } from "./services/deezer";
import { getArtistBiography } from "./services/lastFm";

const app = express();

// Application-Level Middleware
app.use(cors());

// Routes
app.get("/track/:query", async (req, res) => {
  try {
    // 1. Get search results from Deezer API
    const searchResults = await getSearchResults(req.params.query);

    // 2. Enrich results with biography from Last.fm API
    const data = await Promise.all(
      searchResults.map(async datum => ({
        ...datum,
        artist: {
          ...datum.artist,
          biography: await getArtistBiography(datum.artist.name)
        }
      }))
    );

    return res.send(data);
  } catch (error) {
    console.log(error);
  }
});

// Start
app.listen(process.env.NODE_API_PORT, () => {
  console.log(`Listening on port ${process.env.NODE_API_PORT}`);
});
