import React from "react";
import ReactDOM from "react-dom";
import BiographyModal from "./BiographyModal";

describe("BiographyModal tests", () => {
  test("it should renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<BiographyModal />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
