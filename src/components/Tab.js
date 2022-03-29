import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import classnames from "classnames";

const noop = () => {};

const TAB_SIZES = { large: "large", default: "default" };

const TAB_STYLES = { primary: "primary", secondary: "secondary" };

const Tab = ({ children, size, style, className = "", ...otherProps }) => {
  return (
    <div
      className={classnames(
        {
          "cs-ui-tab__wrapper flex": true,
        },
        {
          "cs-ui-tab__wrapper--size-large": size === TAB_SIZES.large,
        },
        {
          "cs-ui-tab__wrapper--secondary": style === TAB_STYLES.secondary,
        },
        [className]
      )}
      data-cy="tab-container"
      {...otherProps}
    >
      {children}
    </div>
  );
};

Tab.propTypes = {
  /**
   * Set the style of tabs
   */
  style: PropTypes.oneOf(Object.values(TAB_STYLES)),
  /**
   * Set the size of the tabs.
   */
  size: PropTypes.oneOf(Object.values(TAB_SIZES)),
  /**
   * To add content inside Tab
   */
  children: PropTypes.node,
  /**
   * Extra classes can be provided to the Tab
   */
  className: PropTypes.string,
};

const Item = ({
  active,
  className = "",
  children,
  icon = null,
  onClick = noop,
  activeClassName = "",
  ...otherProps
}) => {
  let Parent = "button";
  let Icon =
    typeof icon == "string"
      ? () => <i className={icon} data-cy="tab-item-icon" />
      : icon || React.Fragment;

  if (activeClassName) {
    Parent = NavLink;
  }

  return (
    <Parent
      className={classnames(
        ["cs-ui-tab flex items-center justify-center select-none", className],
        {
          secondary: TAB_STYLES.secondary,
        },
        {
          active: active,
        }
      )}
      onClick={onClick}
      data-cy="tab-item"
      {...otherProps}
    >
      {icon && <Icon className="cs-ui-tab__icon" />}
      {children}
    </Parent>
  );
};

Item.propTypes = {
  /**
   * To set the Active Tab
   */
  active: PropTypes.bool,
  /**
   * Extra classes can be provided to the Tab Item
   */
  className: PropTypes.string,
  /**
   * To add content inside Tab Item
   */
  children: PropTypes.node,
  /**
   * To add icons to Tab Item
   */
  icon: PropTypes.string,
  /**
   * Callback to be triggered when user clicks on the Tab Item
   */
  onClick: PropTypes.func,
  /**
   * The additional classname to be provided if the link is active. The container becomes a navlink if this value is given.
   */
  activeClassName: PropTypes.string,
};

Tab.Item = Item;

export default Tab;
