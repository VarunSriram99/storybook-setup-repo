import React, { useState, useRef, useEffect } from "react";

import classnames from "classnames";
import PropTypes from "prop-types";
import { useId } from "@reach/auto-id";

import hyphenize from "../utils/hyphenize";

import Label from "./Label";
import Typography from "./Typography";
import { Success, Error } from "../assets/icons";

const Textarea = (props) => {
  const {
    rows = 3,
    label,
    error,
    required,
    disabled,
    className,
    helpText = "",
    successMessage,
    touched = true,
    nakedTextarea = false,
    maxLength,
    ...otherProps
  } = props;

  const [valueInternal, setValueInternal] = useState("");
  const onChangeInternal = (e) => setValueInternal(e.target.value);

  const value = props.value ?? valueInternal;
  const onChange = props.onChange ?? onChangeInternal;

  const id = useId(props.id);
  const errorId = `error_${id}`;
  const helpTextId = `helpText_${id}`;
  const textareaRef = useRef(null);

  const valueLength = value?.toString().length || 0;

  useEffect(() => {
    textareaRef.current.style.minHeight = "22px";
    textareaRef.current.style.height = "auto";
    const scrollHeight = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = scrollHeight + "px";
  }, [value]);

  return (
    <div
      className={classnames(["cs-ui-input__wrapper", className])}
      data-testid="textarea"
    >
      <div className="cs-ui-input__label-wrapper">
        {label && (
          <Label
            required={required}
            data-cy={`${hyphenize(label)}-label`}
            htmlFor={id}
          >
            {label}
          </Label>
        )}
        {maxLength && (
          <Typography className="cs-ui-input__max-length" style="medium">
            {valueLength} / {maxLength}
          </Typography>
        )}
      </div>
      <div
        className={classnames("cs-ui-input", "cs-ui-input--textarea", {
          "cs-ui-input--error": !!error,
          "cs-ui-input--success": !error && successMessage && touched,
          "cs-ui-input--disabled": !!disabled,
          "cs-ui-input--naked": !!nakedTextarea,
        })}
      >
        <textarea
          rows={rows}
          value={value}
          ref={textareaRef}
          disabled={disabled}
          {...otherProps}
          onChange={onChange}
        />
      </div>
      {!!error && (
        <p
          data-cy={`${hyphenize(label)}-input-error`}
          className="cs-ui-input__error"
          id={errorId}
        >
          <Error size={15} />
          {error}
        </p>
      )}
      {!error && touched && successMessage && (
        <p
          data-cy={`${hyphenize(label)}-input-success`}
          className="cs-ui-input__success"
          id={errorId}
        >
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
};

Textarea.propTypes = {
  rows: PropTypes.number,
  label: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  helpText: PropTypes.string,
  nakedTextarea: PropTypes.bool,
  maxLength: PropTypes.number,
};

export default Textarea;
