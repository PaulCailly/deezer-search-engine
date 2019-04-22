import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";

import React from "react";
import ReactDOM from "react-dom";
import Datagrid from "./Datagrid";

describe("Datagrid tests", () => {
  test("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Datagrid />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
