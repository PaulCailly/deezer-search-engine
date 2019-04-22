import React, { useState, useLayoutEffect } from "react";

import useDataApi from "./hooks/use-data-api/useDataApi";
import useDebounce from "./hooks/use-debounce/useDebounce";

import SearchInput from "./components/search-input/SearchInput";
import Datagrid from "./components/datagrid/Datagrid";
import LinearProgress from "@material-ui/core/LinearProgress";

import "./styles.scss";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const debouncedInputValue = useDebounce(inputValue, 300);
  const { data, isLoading, isError, error, doFetch } = useDataApi("track");

  useLayoutEffect(() => {
    doFetch(debouncedInputValue, 0);
  }, [debouncedInputValue]);

  return (
    <div>
      {isLoading && <LinearProgress className="linearProgress" />}
      <SearchInput inputValue={inputValue} setInputValue={setInputValue} />
      {isError && <div className="errorMessage">{error.message}</div>}
      {inputValue && (
        <div>
          <Datagrid data={data} inputValue={inputValue} doFetch={doFetch} />
        </div>
      )}
    </div>
  );
};

export default App;
