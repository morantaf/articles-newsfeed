import request from "superagent";

const API_KEY = "8b5b038fd1344e60b706a1fe04d8ddc8";

const baseUrl = `http://newsapi.org/v2/everything?q=football&from=2020-07-09&sortBy=publishedAt&apiKey=${API_KEY}`;

const allArticles = (payload) => ({
  type: "ALL_ARTICLES",
  payload: payload,
});

export const getArticles = () => async (dispatch) => {
  try {
    const response = await request.get(`${baseUrl}`);

    const articles = response.body.articles;

    const action = allArticles(articles);

    dispatch(action);
  } catch (error) {
    console.error(error);
  }
};
