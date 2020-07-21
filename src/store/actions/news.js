import request from "superagent";

const API_KEY = "8b5b038fd1344e60b706a1fe04d8ddc8";

const baseUrl = `newsapi.org/v2/everything?q=football&from=2020-07-09&sortBy=publishedAt&apiKey=${API_KEY}`;

export const getImages = () => async (dispatch) => {
  try {
  } catch (error) {
    console.error(error);
  }
};
