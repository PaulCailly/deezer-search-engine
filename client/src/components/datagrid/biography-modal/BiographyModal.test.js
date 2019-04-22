import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import { render } from "react-testing-library";

import React from "react";
import ReactDOM from "react-dom";
import BiographyModal from "./BiographyModal";

describe("BiographyModal tests", () => {
  test("it should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<BiographyModal />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test("it should render with the props content", () => {
    const mockedModalContent = {
      name: "artist name",
      biography: "artist biography"
    };

    const { getByTestId } = render(
      <BiographyModal open={true} modalContent={mockedModalContent} />
    );
    expect(getByTestId("name")).toHaveTextContent("artist name");
    expect(getByTestId("biography")).toHaveTextContent("artist biography");
  });

  test("it should render with default values", () => {
    const { getByTestId } = render(<BiographyModal open={true} />);
    expect(getByTestId("name")).toHaveTextContent("");
    expect(getByTestId("biography")).toHaveTextContent("");
  });
});
