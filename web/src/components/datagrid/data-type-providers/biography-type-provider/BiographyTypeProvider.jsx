import React from "react";
import PropTypes from "prop-types";
import { DataTypeProvider } from "@devexpress/dx-react-grid";

const BiographyTypeProvider = ({ setOpen, setModalContent, ...props }) => (
  <DataTypeProvider
    formatterComponent={({ value }) => (
      <div
        onClick={() => {
          setOpen(true);
          setModalContent(value);
        }}
      >
        <div>{value.biography || "-"}</div>
      </div>
    )}
    {...props}
  />
);

BiographyTypeProvider.defaultProps = {
  setOpen: () => {},
  setModalContent: () => {},
  value: { name: "", biography: "" }
};

BiographyTypeProvider.propTypes = {
  setOpen: PropTypes.func.isRequired,
  setModalContent: PropTypes.func.isRequired
};

export default BiographyTypeProvider;
