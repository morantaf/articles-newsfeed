const initialState = {
  articles: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ALL_NEWS":
      return { ...state, articles: payload.articles };

    default:
      return state;
  }
};
