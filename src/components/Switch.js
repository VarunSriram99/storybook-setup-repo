import React, { useState } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { useId } from "@reach/auto-id";
import hyphenize from "utils/hyphenize";
import Label from "./Label";
import { Check, Close, Error } from '../assets/icons';

const Switch = ({
  label = "",
  required = false,
  className = "",
  error = "",
  onChange = () => {},
  ...otherProps
}) => {
  const { checked, disabled } = otherProps;
  const [isChecked, setIsChecked] = useState(checked ?? false);
  const id = useId(otherProps.id);
  const errorId = `error_${id}`;
  return (
    <div
      className={classnames(["cs-ui-switch__wrapper", className])}
      data-testid="switch"
    >
      <div className="cs-ui-switch__container">
        <label
          className={classnames("cs-ui-switch__item", {
            "cs-ui-switch__item--checked": checked || isChecked,
            "cs-ui-switch__item--disabled": disabled,
          })}
        >
          <input
            type="checkbox"
            onChange={e => {
              onChange(e);
              setIsChecked(e.target.checked);
            }}
            {...otherProps}
          />
          <span aria-hidden="true" className="cs-ui-switch">
            {checked || isChecked ? (
              <Check size="12" strokeWidth={4} />
            ) : (
              <Close size="12" strokeWidth={3} color="#C2C8CC" />
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
          <Error size={15} />
          {error}
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
