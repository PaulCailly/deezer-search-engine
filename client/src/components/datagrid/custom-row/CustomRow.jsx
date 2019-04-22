import React, { useEffect } from "react";
import TableRow from "@material-ui/core/TableRow";

const CustomRow = ({
  dataLength,
  inputValue,
  doFetch,
  children,
  row,
  tableRow
}) => {
  useEffect(() => {
    if (dataLength - 1 === tableRow.rowId) {
      doFetch(inputValue, dataLength);
    }
  }, []);

  return <TableRow children={children} row={row} />;
};

export default CustomRow;
