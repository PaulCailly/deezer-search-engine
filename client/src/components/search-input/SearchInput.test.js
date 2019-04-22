import React from "react";
import ReactDOM from "react-dom";
import SearchInput from "./SearchInput";

describe("SearchInput tests", () => {
  test("should renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SearchInput />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
