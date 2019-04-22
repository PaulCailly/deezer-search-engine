import React from "react";
import { DataTypeProvider } from "@devexpress/dx-react-grid";
import moment from "moment";

const DurationTypeProvider = ({ ...props }) => (
  <DataTypeProvider
    formatterComponent={({ value }) => moment(value * 1000).format("mm:ss")}
    {...props}
  />
);

export default DurationTypeProvider;
