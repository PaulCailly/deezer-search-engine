import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import dataFetchReducer from "./reducer";
import { usePrevious } from "./../use-previous/usePrevious";

const useDataApi = ressource => {
  const [queryInput, setQueryInput] = useState();
  const [queryIndex, setQueryIndex] = useState();

  const prevQueryInput = usePrevious(queryInput);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: []
  });

  useEffect(() => {
    const fetchData = async () => {
      if (prevQueryInput && prevQueryInput !== queryInput) {
        dispatch({ type: "RESET_STATE" });
      }
      if (queryInput) {
        dispatch({ type: "FETCH_INIT" });
        try {
          const query = encodeURI(
            `http://${process.env.REACT_APP_API_HOST}:${
              process.env.REACT_APP_API_PORT
            }/${ressource}/${queryInput}&index=${queryIndex}`
          );
          const result = await axios(query);
          dispatch({ type: "FETCH_SUCCESS", payload: result.data });
        } catch (error) {
          dispatch({ type: "FETCH_FAILURE" });
        }
      }
    };

    fetchData();
  }, [queryInput, queryIndex]);

  const doFetch = (input, index) => {
    setQueryInput(input);
    setQueryIndex(index);
  };

  return { ...state, doFetch };
};

export default useDataApi;
