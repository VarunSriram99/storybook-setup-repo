import React from "react";

import classnames from "classnames";
import PropTypes from "prop-types";
import { useId } from "@reach/auto-id";
import hyphenize from "../utils/hyphenize";

import { Success, Error } from "../icons";

import Label from "./Label";

const Radio = ({
  label = "",
  children,
  stacked = false,
  className = "",
  containerClassName = "",
  error = "",
  touched = true,
  successMessage,
  ...props
}) => {
  const id = useId(props.id);
  const errorId = `error_${id}`;
  return (
    <div className={classnames(["cs-ui-radio__wrapper", className])}>
      {label && <Label className="cs-ui-radio__label">{label}</Label>}
      <div
        className={classnames(["cs-ui-radio__container"], {
          "cs-ui-radio__container--stacked": stacked,
          "cs-ui-radio__container--error": error,
          [containerClassName]: containerClassName,
        })}
      >
        {React.Children.map(children, child =>
          React.cloneElement(child, {
            ...child.props,
            ...props,
            value: child.props.value,
            checked:
              child.props.checked ??
              (child.props.value === props.value || undefined),
          })
        )}
      </div>
      {!!error && (
        <p
          data-cy={`${hyphenize(label)}-radio-input-error`}
          className="cs-ui-radio-input__error"
          id={errorId}
        >
          <Error size={15} />
          {error}
        </p>
      )}
      {!error && successMessage && touched && (
        <p
          data-cy={`${hyphenize(label)}-radio-input-success`}
          className="cs-ui-radio-input__success"
          id={errorId}
        >
          <Success size={15} />
          {successMessage}
        </p>
      )}
    </div>
  );
};

Radio.propTypes = {
  /**
   * To specify the label to be displayed for radio component.
   */
  label: PropTypes.string,
  /**
   * To specify the content to be rendered inside the radio component.
   */
  children: PropTypes.node,
  /**
   * To specify whether the radio items should be stacked vertically or not.
   */
  stacked: PropTypes.bool,
  /**
   * To specify external classnames as overrides to the radio component.
   */
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  /**
   * To specify the error message to be displayed when the radio input is invalid.
   */
  error: PropTypes.string,
};

const Item = ({ name = "", label = "", className = "", ...otherProps }) => {
  const id = useId(otherProps.id);

  return (
    <div className={classnames(["cs-ui-radio__item", className])}>
      <input
        id={id}
        type="radio"
        name={name}
        className="cs-ui-radio"
        {...otherProps}
      />
      {label && (
        <Label data-cy={`${hyphenize(label)}-radio-label`} htmlFor={id}>
          {label}
        </Label>
      )}
    </div>
  );
};

Radio.Item = Item;

export default Radio;
