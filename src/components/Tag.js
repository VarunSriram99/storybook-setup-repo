import React from "react";

import PropTypes from "prop-types";
import classnames from "classnames";

import { Close } from "../assets/icons";

import findContrast from "../utils/findContrast";

const sizes = { small: "small", large: "large" };

const Tag = ({
  icon,
  size,
  label,
  color,
  onClose,
  disabled,
  className,
  ...otherProps
}) => {
  const Icon =
    typeof icon == "string"
      ? () => <i title="tag-icon" className={icon} />
      : icon || React.Fragment;

  return (
    <div
      className={classnames(
        "cs-ui-tag",
        {
          "cs-ui-tag--size-large": size === sizes.large,
          "cs-ui-tag--size-small": size === sizes.small,
        },
        findContrast(color),
        className
      )}
      data-testid="tag"
      style={{ backgroundColor: color }}
      {...otherProps}
    >
      {icon && (
        <span className="cs-ui-tag__icon">
          <Icon />
        </span>
      )}
      {label}

      {onClose && (
        <span
          onClick={disabled ? () => {} : onClose}
          className="cs-ui-tag__close"
        >
          <Close />
        </span>
      )}
    </div>
  );
};

Tag.defaultProps = {
  icon: null,
  size: sizes.small,
  label: "",
  color: "#fff",
  onClose: () => {},
  disabled: false,
  className: "",
};

Tag.propTypes = {
  /**
   * To specify the icon to be used in the tag.
   */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  /**
   * To specify the size of the tag.
   */
  size: PropTypes.oneOf(Object.keys(sizes)),
  /**
   * To specify the label of the tag.
   */
  label: PropTypes.string,
  /**
   * To specify the background color of the tag in hex format eg: "#1234ff" or "#fff".
   */
  color: PropTypes.string,
  /**
   * To specify the callback to be called when the close button is pressed. Close button only appears when onClose is specified.
   */
  onClose: PropTypes.func,
  /**
   * To specify whether tag is disabled or not.
   */
  disabled: PropTypes.bool,
  /**
   * To specify the additional classes to be provided to the tag element.
   */
  className: PropTypes.string,
};

export default Tag;
