import React, { useState } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { useId } from "@reach/auto-id";
import hyphenize from "../utils/hyphenize";
import Label from "./Label";
import { Check, Close } from "../icons";

const Switch = ({
  label = "",
  required = false,
  className = "",
  error = "",
  successMessage,
  ...otherProps
}) => {
  const { checked, disabled } = otherProps;
  const [isChecked, setIsChecked] = useState(checked ? checked : false);

  const id = useId(otherProps.id);
  const errorId = `error_${id}`;
  return (
    <div className={classnames(["cs-ui-switch__wrapper", className])}>
      <div className="cs-ui-switch__container">
        <label
          className={classnames("cs-ui-switch__item", {
            "cs-ui-switch__item--checked": isChecked,
            "cs-ui-switch__item--disabled": disabled,
          })}
        >
          <input
            type="checkbox"
            {...otherProps}
            onChange={() => !checked && setIsChecked(!isChecked)}
          />
          <span aria-hidden="true" className="cs-ui-switch">
            {isChecked ? (
              <Check size="12" strokeWidth={20} stroke="currentColor" />
            ) : (
              <Close size="12" strokeWidth={3} />
            )}
          </span>
        </label>
        {label && (
          <Label
            required={required}
            data-cy={`${hyphenize(label)}-switch-label`}
            htmlFor={id}
          >
            {label}
          </Label>
        )}
      </div>
      {!!error && (
        <p
          data-cy={`${hyphenize(label)}-switch-error`}
          className="cs-ui-input__error"
          id={errorId}
        >
          {error}
        </p>
      )}
      {!error && successMessage && (
        <p
          data-cy={`${hyphenize(label)}-switch-success`}
          className="cs-ui-input__success"
          id={errorId}
        >
          {successMessage}
        </p>
      )}
    </div>
  );
};

Switch.propTypes = {
  /**
   * Text to be displayed above the component
   */
  label: PropTypes.node,
  required: PropTypes.bool,
  className: PropTypes.string,
  error: PropTypes.string,
  /**
   * Checks whether the switch is checked or not
   */
  checked: PropTypes.bool,
  /**
   * To disable the component
   */
  disabled: PropTypes.bool,
};

export default Switch;
