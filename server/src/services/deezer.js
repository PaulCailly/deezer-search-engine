import axios from "axios";

export const getSearchResults = async query => {
  try {
    const results = await axios(
      `${process.env.DEEZER_API_BASE_URL}/search?q=${query}`
    );
    return results.data.data;
  } catch (error) {
    console.log(error);
  }
};
