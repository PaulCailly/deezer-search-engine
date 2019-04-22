import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import { fireEvent } from "react-testing-library";

import React from "react";
import ReactDOM from "react-dom";
import SearchInput from "./SearchInput";

describe("SearchInput tests", () => {
  test("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SearchInput />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test("it should update input value when the value is changed", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SearchInput />, div);
    const searchInput = div.querySelector("input");

    fireEvent.change(searchInput, { target: { value: "artist name" } });
    expect(searchInput.value).toBe("artist name");
  });
});
