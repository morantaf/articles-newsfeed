const initialState = {
  articles: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ALL_ARTICLES":
      return { ...state, articles: payload };

    default:
      return state;
  }
};
