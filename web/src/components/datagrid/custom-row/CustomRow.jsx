import React, { useEffect } from "react";
import TableRow from "@material-ui/core/TableRow";

const CustomRow = ({ dataLength, inputValue, doFetch, ...props }) => {
  useEffect(() => {
    if (dataLength - 1 === props.tableRow.rowId) {
      doFetch(inputValue, dataLength);
    }
  }, []);
  return <TableRow {...props} />;
};

export default CustomRow;
