const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case "RESET_STATE":
      return { isLoading: false, isError: false, data: [] };
    case "FETCH_INIT":
      return { ...state, isLoading: true, isError: false };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: [...state.data, ...action.payload]
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload
      };
    default:
      throw new Error();
  }
};

export default dataFetchReducer;
