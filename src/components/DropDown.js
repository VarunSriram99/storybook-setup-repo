import React, { useState, useEffect, useRef } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { usePopper } from "react-popper";
import { useHotkeys } from "react-hotkeys-hook";

import { DownMinimalArrow } from '../assets/icons';
import Button from "./Button";

import {useOnClickOutside} from "../utils/useOnClickOutside";

const noop = () => {};
const DROPDOWN_BTN_STYLES = {
  primary: "primary",
  secondary: "secondary",
  text: "text",
};

const STRATEGY = {
  absolute: "absolute",
  fixed: "fixed",
};

const PLACEMENT = {
  auto: "auto",
  autoStart: "auto-start",
  autoEnd: "auto-end",
  top: "top",
  topStart: "top-start",
  topEnd: "top-end",
  bottom: "bottom",
  bottomStart: "bottom-start",
  bottomEnd: "bottom-end",
  right: "right",
  rightStart: "right-start",
  rightEnd: "right-end",
  left: "left",
  leftStart: "left-start",
  leftEnd: "left-end",
};

const TRIGGERS = {
  click: "click",
  hover: "hover",
};

const Dropdown = ({
  icon,
  label,
  isOpen,
  onClose = noop,
  ulProps,
  position,
  children,
  autoWidth,
  className,
  buttonStyle = "primary",
  buttonProps,
  customTarget,
  disabled = false,
  closeOnEsc = true,
  closeOnSelect = true,
  closeOnOutsideClick = true,
  dropdownModifiers = [],
  trigger = TRIGGERS.click,
  strategy = STRATEGY.absolute,
  primaryAction,
  primaryButtonClass,
  ...otherProps
}) => {
  const Target = customTarget;
  const isControlled = !(isOpen === undefined || isOpen === null);

  const [visible, setVisibility] = useState(false);
  const [reference, setReference] = useState(null);
  const [popper, setPopper] = useState(null);

  const { styles, attributes } = usePopper(reference, popper, {
    placement: position || "bottom-end",
    modifiers: dropdownModifiers,
    strategy: strategy,
  });

  const onPopupClose = () => {
    if (!isControlled) setVisibility(false);
    onClose();
  };

  const handlePopperClick = () => {
    closeOnSelect && onPopupClose();
  };

  const handleButtonClick = () => {
    setVisibility(!visible);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  closeOnEsc && useHotkeys("esc", onPopupClose);


  if (!isControlled) {
    buttonProps = {
      ...buttonProps,
      onClick: () => {
        handleButtonClick();
      },
    };
  }

  const hoverHandlers =
    trigger === TRIGGERS.hover
      ? {
          onMouseEnter: () => !visible && setVisibility(true),
          onMouseLeave: () => visible && setVisibility(false),
        }
      : {};

  useEffect(() => {
    isControlled && setVisibility(isOpen);
  }, [isOpen]);

  const dropdownRef = useRef();

  useOnClickOutside(dropdownRef, closeOnOutsideClick && onPopupClose);

  return (
    <div
      className={classnames("cs-ui-dropdown__wrapper", {
        "cs-ui-dropdown__wrapper--auto-width": autoWidth,
        [className]: className,
      })}
      ref={dropdownRef}
      {...otherProps}
      {...hoverHandlers}
    >
      {customTarget ? (
        <div ref={setReference} onClick={handleButtonClick}>
          <Target />
        </div>
      ) : (
        <div className="cs-ui-dropdown__button-group">
          <Button
            label={label}
            style={buttonStyle}
            icon={icon}
            iconPosition="left"
            disabled={disabled || buttonProps?.disabled}
            className={classnames(
              "cs-ui-dropdown__button-group__primary",
              primaryButtonClass
            )}
            {...buttonProps}
            onClick={primaryAction}
          />
          <Button
            ref={setReference}
            className="cs-ui-dropdown__button-group__icon"
            disabled={disabled || buttonProps?.disabled}
            style={buttonStyle}
            icon={DownMinimalArrow}
            {...buttonProps}
          />
        </div>
      )}
      {visible && (
        <ul
          className="cs-ui-dropdown__popup"
          ref={setPopper}
          onClick={handlePopperClick}
          {...ulProps}
          style={{
            display: "block",
            ...styles.offset,
            ...styles.popper,
          }}
          {...attributes.popper}
        >
          {children}
        </ul>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  /**
   * To specify the icon to be rendered in the dropdown target.
   */
  icon: PropTypes.string,
  /**
   * To specify the label for dropdown target button.
   */
  label: PropTypes.string,
  /**
   * To specify whther the dropdown is open or not
   */
  isOpen: PropTypes.bool,
  /**
   * To specify the function tobe executed when dropdown is closed
   */
  onClose: PropTypes.func,
  /**
   * To specify the triggerring action for dropdown.
   */
  trigger: PropTypes.oneOf(Object.values(TRIGGERS)),
  /**
   * To specify the positioning strategy to use. By default, it is absolute, which in the simplest cases does not require repositioning of the dropdown.
   *
   * If your reference element is in a fixed container, use the fixed strategy
   */
  strategy: PropTypes.oneOf(Object.values(STRATEGY)),
  /**
   * To specify the classes to be passed to the dropdown menu.
   */
  ulProps: PropTypes.object,
  /**
   * To specify which side of the button the dropdown should appear on.
   */
  position: PropTypes.oneOf(Object.values(PLACEMENT)),
  /**
   * To specify the content to be rendered inside the Dropdown.
   */
  children: PropTypes.node,
  /**
   * To specify whether the dropdown menu width needs to be set to auto or not.
   */
  autoWidth: PropTypes.bool,
  /**
   * To specify the classes to be passed to the dropdown target wrapper.
   */
  className: PropTypes.string,
  /**
   * To specify the style of the button to be rendered as the dropdown target.
   */
  buttonStyle: PropTypes.oneOf(Object.values(DROPDOWN_BTN_STYLES)),
  /**
   * To specify the props to be passed to the dropdown target button.
   */
  buttonProps: PropTypes.object,
  /**
   * To provide a custom target to be rendered instead of the default button target.
   */
  customTarget: PropTypes.node,
  /**
   * To specify whether the dropdown is disabled or not.
   */
  disabled: PropTypes.bool,
  /**
   * To specify whther the dropdown should close on escape.
   */
  closeOnEsc: PropTypes.bool,
  /**
   * To specify whether the dropdown should close on selecting an option.
   */
  closeOnSelect: PropTypes.bool,
  /**
   * To specify whether the dropdown should close when clicked outside it.
   */
  closeOnOutsideClick: PropTypes.bool,
  /**
   * To specify the additional modifiers for the popper which renders the dropdown.
   */
  dropdownModifiers: PropTypes.array,
  /**
   * To specify the primary action to be executes when the dropdown button is clicked
   */
  primaryAction: PropTypes.func,
  /**
   * To specify the additional classnames to be given to the primary button.
   */
  primaryButtonClass: PropTypes.string,
};

export default Dropdown;
