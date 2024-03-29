import React, { useState, useEffect } from "react";

import classnames from "classnames";
import PropTypes from "prop-types";
import { useId } from "@reach/auto-id";
import { Success, Error } from "../assets/icons";

import Label from "./Label";
import Typography from "./Typography";

const INPUT_SIZES = ["small", "large"];

const Input = React.forwardRef((props, ref) => {
  const {
    size = "small",
    label,
    error = null,
    successMessage = null,
    suffix = null,
    prefix = null,
    disabled = false,
    helpText = "",
    className = "",
    nakedInput = false,
    contentSize = null,
    required = false,
    touched = true,
    ...otherProps
  } = props;

  const [value, setValue] = useState(props.value);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const onChange = props.onChange || ((e) => setValue(e.target.value));

  const id = useId(props.id);
  const errorId = `error_${id}`;
  const helpTextId = `helpText_${id}`;

  const valueLength = value?.toString().length || 0;
  const { maxLength } = otherProps;

  return (
    <div className={classnames(["cs-ui-input__wrapper", className])}>
      <div className="cs-ui-input__label-wrapper">
        {label && (
          <Label required={required} htmlFor={id}>
            {label}
          </Label>
        )}
        {maxLength && (
          <Typography className="cs-ui-input__max-length" style="small">
            {valueLength} / {maxLength}
          </Typography>
        )}
      </div>
      <div
        className={classnames("cs-ui-input", {
          "cs-ui-input--naked": !!nakedInput,
          "cs-ui-input--error": !!error,
          "cs-ui-input--success": !error && !!successMessage && touched,
          "cs-ui-input--disabled": !!disabled,
          "cs-ui-input--small": size === "small",
        })}
      >
        {prefix && <div className="cs-ui-input__prefix">{prefix}</div>}
        <input
          ref={ref}
          id={id}
          type="text"
          disabled={disabled}
          size={contentSize}
          value={value}
          required={required}
          aria-invalid={!!error}
          aria-describedby={classnames({
            [errorId]: !!error,
            [helpTextId]: helpText,
          })}
          data-cy={"input-field"}
          {...otherProps}
          onChange={onChange}
        />
        {suffix && <div className="cs-ui-input__suffix">{suffix}</div>}
      </div>
      {!!error && (
        <p className="cs-ui-input__error" id={errorId}>
          <Error size={15} />
          {error}
        </p>
      )}
      {touched && !error && !!successMessage && (
        <p className="cs-ui-input__success" id={errorId}>
          <Success size={15} />
          {successMessage}
        </p>
      )}
      {helpText && (
        <p className="cs-ui-input__help-text" id={helpTextId}>
          {helpText}
        </p>
      )}
    </div>
  );
});

Input.propTypes = {
  /**
   * To specify a unique ID to the input component.
   */
  id: PropTypes.string,
  /**
   * To specify the size of input.
   */
  size: PropTypes.oneOf(INPUT_SIZES),
  /**
   * To specify a maximum character limit to the input.
   */
  maxLength: PropTypes.number,
  /**
   * To specify the text to be displayed above the input.
   */
  label: PropTypes.string,
  /**
   * To specify the text to be displayed for error message.
   */
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /**
   * To specify the text to be displayed the success message.
   */
  successMessage: PropTypes.string,
  /**
   * To specify the content to be added at the end of the input field.
   */
  suffix: PropTypes.node,
  /**
   * To specify the content to be added at the beginning of the input field.
   */
  prefix: PropTypes.node,
  /**
   * To specify whether the input field is disabled or not.
   */
  disabled: PropTypes.bool,
  /**
   * To specify the text that appears below the input field.
   */
  helpText: PropTypes.string,
  /**
   * To specify external classNames that can be provided as overrides to the main wrapper.
   */
  className: PropTypes.string,
  /**
   * To create an input field without any borders.
   */
  nakedInput: PropTypes.bool,
  /**
   * To specify the value to be passed as size attribute to the input field.
   */
  contentSize: PropTypes.number,
  /**
   * To specify whether the input field is required or not.
   */
  required: PropTypes.bool,
};

export default Input;
