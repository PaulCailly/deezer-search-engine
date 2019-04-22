import axios from "axios";

const stripHTMLTags = string => string.replace(/(<([^>]+)>)/gi, "");

export const getArtistBiography = async query => {
  try {
    const results = await axios(
      `${
        process.env.LAST_FM_BASE_URL
      }/?method=artist.getinfo&artist=${query}&api_key=${
        process.env.LAST_FM_API_KEY
      }&format=json`
    );
    return results.data.artist
      ? stripHTMLTags(results.data.artist.bio.content)
      : null;
  } catch (error) {
    console.log(error);
  }
};
