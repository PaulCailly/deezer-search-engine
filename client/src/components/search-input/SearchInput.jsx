import React from "react";
import PropTypes from "prop-types";

import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";

import "./styles.scss";

const SearchInput = ({ inputValue, setInputValue }) => (
  <div className="searchInput--container">
    <TextField
      placeholder="Search for anything"
      classes={{ root: "searchInput" }}
      value={inputValue}
      onChange={event => setInputValue(event.target.value)}
      InputLabelProps={{ classes: { root: "searchInput__label" } }}
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <InputAdornment
            classes={{ root: "searchInput__adornment" }}
            position="start"
          >
            <SearchIcon />
          </InputAdornment>
        )
      }}
    />
  </div>
);

SearchInput.defaultProps = {
  inputValue: "",
  setInputValue: () => {}
};

SearchInput.propTypes = {
  inputValue: PropTypes.string,
  setInputValue: PropTypes.func.isRequired
};

export default SearchInput;
