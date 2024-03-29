import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const STYLES = {
  info: "info",
  warning: "warning",
  danger: "danger",
};

const Callout = ({
  icon = null,
  style = STYLES.info,
  className = "",
  children,
  ...otherProps
}) => {
  const Icon = icon;

  return (
    <div
      className={classnames("cs-ui-callout", {
        "cs-ui-callout--info": style === STYLES.info,
        "cs-ui-callout--warning": style === STYLES.warning,
        "cs-ui-callout--danger": style === STYLES.danger,
        [className]: className,
      })}
      {...otherProps}
    >
      {icon && (
        <div data-testid="callout-icon" className="cs-ui-callout__icon">
          <Icon />
        </div>
      )}
      {children}
    </div>
  );
};

Callout.propTypes = {
  /**
   * To specify the icon to be used in Callout component. By default, icons are based on the style of the Callout component. Passing false will hide the icon.
   */
  icon: PropTypes.elementType,
  /**
   * To specify the style of Callout component.
   */
  style: PropTypes.oneOf(Object.values(STYLES)),
  /**
   * To provide external classnames to Callout component.
   */
  className: PropTypes.string,
  /**
   * To specify the content to be rendered inside the Callout component.
   */
  children: PropTypes.node,
};

export default Callout;
