import React from "react";

import Input from "./Input";
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
  /**
   * To specify the placeholder text for the search bar.
   */
  placeholder: PropTypes.string,
  /**
   * To choose between the primary and secondary styled search bars.
   */
  style: PropTypes.oneOf(Object.values(STYLES)),
  /**
   * To get the current value of the search bar.
   */
  value: PropTypes.string,
  /**
   * To specify the `onChange` action on the search bar.
   */
  onChange: PropTypes.func,
  /**
   * To provide a secondary icon for the search bar.
   */
  secondaryIcon: PropTypes.node,
  /**
   * To provide aditional classnames for the search bar.
   */
  className: PropTypes.string,
};

export default SearchBar;
