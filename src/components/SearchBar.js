import React from "react";

import { Input } from "clearsense-ui/components";
import classnames from "classnames";
import PropTypes from "prop-types";
import { Search } from '../assets/icons';

const STYLES = { primary: "primary", secondary: "secondary" };

const SearchBar = ({
  placeholder = "Search",
  value,
  onChange,
  secondaryIcon,
  style = "primary",
  className,
  size = "small",
}) => {
  return (
    <Input
      className={classnames("cs-ui-search-bar__input", className, {
        "cs-ui-search-bar__input--secondary": style === STYLES.secondary,
      })}
      value={value}
      onChange={onChange}
      prefix={
        <div
          className={classnames("cs-ui-search-bar__input__prefix", {
            "cs-ui-search-bar__input__prefix--secondary": secondaryIcon,
          })}
        >
          <Search />
          {secondaryIcon}
        </div>
      }
      placeholder={placeholder}
      nakedInput={true}
      size={size}
    />
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  secondaryIcon: PropTypes.node,
  className: PropTypes.string,
};

export default SearchBar;
