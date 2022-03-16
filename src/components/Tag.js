import React from "react";

import PropTypes from "prop-types";
import classnames from "classnames";

import { Close } from '../assets/icons';

import findContrast from "utils/findContrast";

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
        <span onClick={!disabled && onClose} className="cs-ui-tag__close">
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
  onClose: null,
  disabled: false,
  className: "",
};

Tag.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  size: PropTypes.oneOf(Object.keys(sizes)),
  label: PropTypes.string,
  color: PropTypes.string,
  onClose: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Tag;
