import React from "react";
import PropTypes from "prop-types";
import { DataTypeProvider } from "@devexpress/dx-react-grid";

import "./styles.scss";

const BiographyTypeProvider = ({ setOpen, setModalContent, ...props }) => (
  <DataTypeProvider
    formatterComponent={({ value }) => (
      <div
        className="biographyTypeProvider__link"
        onClick={() => {
          setOpen(true);
          setModalContent(value);
        }}
      >
        {value.biography || "-"}
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
