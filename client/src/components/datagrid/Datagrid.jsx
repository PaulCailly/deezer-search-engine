import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

import {
  Grid,
  VirtualTable,
  TableHeaderRow,
  TableFilterRow
} from "@devexpress/dx-react-grid-material-ui";
import {
  FilteringState,
  IntegratedFiltering,
  SortingState,
  IntegratedSorting
} from "@devexpress/dx-react-grid";

import BiographyModal from "./biography-modal/BiographyModal";
import BiographyTypeProvider from "./data-type-providers/biography-type-provider/BiographyTypeProvider";
import DurationTypeProvider from "./data-type-providers/duration-type-provider/DurationTypeProvider";
import CustomRow from "./custom-row/CustomRow";

import "./styles.scss";

const Datagrid = ({ data, inputValue, doFetch }) => {
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState();
  return (
    <Fragment>
      {modalContent && (
        <BiographyModal
          open={open}
          setOpen={setOpen}
          modalContent={modalContent}
          data-testid="modal"
        />
      )}
      <div className="dataGrid--container">
        <Grid
          rows={data}
          columns={[
            { name: "track", title: "Track", getCellValue: row => row.title },
            {
              name: "artist",
              title: "Artist",
              getCellValue: row => row.artist.name
            },
            {
              name: "biography",
              title: "Biography",
              getCellValue: row => row.artist
            },
            {
              name: "albumName",
              title: "Album",
              getCellValue: row => row.album.title
            },
            {
              name: "length",
              title: "Length",
              getCellValue: row => row.duration
            }
          ]}
        >
          <BiographyTypeProvider
            for={["biography"]}
            setOpen={setOpen}
            setModalContent={setModalContent}
          />
          <DurationTypeProvider for={["length"]} />

          <SortingState />
          <IntegratedSorting />
          <FilteringState defaultFilters={[]} />
          <IntegratedFiltering />
          <VirtualTable
            rowComponent={props => (
              <CustomRow
                {...props}
                dataLength={data.length}
                inputValue={inputValue}
                doFetch={doFetch}
              />
            )}
          />
          <TableHeaderRow showSortingControls />
          <TableFilterRow />
        </Grid>
      </div>
    </Fragment>
  );
};

Datagrid.defaultProps = {
  data: []
};

Datagrid.propTypes = {
  data: PropTypes.array.isRequired
};

export default Datagrid;
