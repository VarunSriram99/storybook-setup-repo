import React from "react";

import classnames from "classnames";
import PropTypes from "prop-types";
import { useId } from "@reach/auto-id";

import { Error } from "../assets/icons";

import Label from "./Label";

const Checkbox = ({
  label = "",
  error = "",
  className = "",
  required = false,
  disabled = false,
  ...otherProps
}) => {
  const id = useId(otherProps.id);
  const errorId = `error_${id}`;
  return (
    <div className={classnames("cs-ui-checkbox__wrapper", className)}>
      <div className="cs-ui-checkbox__container">
        <input
          id={id}
          name={id}
          type="checkbox"
          className="cs-ui-checkbox"
          required={required}
          aria-invalid={!!error}
          disabled={disabled}
          {...otherProps}
        />
        {label && <Label htmlFor={id}>{label}</Label>}
      </div>
      {!!error && (
        <p className="cs-ui-input__error" id={errorId}>
          <Error size={15} />
          {error}
        </p>
      )}
    </div>
  );
};

Checkbox.propTypes = {
  /**
   * To specify a unique ID to the checkbox component.
   */
  id: PropTypes.string,
  /**
   * To specify the text to be displayed next to the checkbox.
   */
  label: PropTypes.string,
  /**
   * To specify the error message to be shown.
   */
  error: PropTypes.string,
  /**
   * To provide external classnames to checkbox component.
   */
  className: PropTypes.string,
  /**
   * To specify whether the checkbox is a required field or not.
   */
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Checkbox;
