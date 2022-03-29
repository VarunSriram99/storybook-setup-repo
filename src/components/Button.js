import React from "react";
import classnames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Spinner from "../atoms/Spinner";

const noop = () => {};
const BUTTON_STYLES = {
  primary: "primary",
  secondary: "secondary",
  danger: "danger",
  text: "text",
};
const BUTTON_SIZES = { large: "large", medium: "medium", small: "small" };
const ICON_POSITIONS = { left: "left", right: "right" };
const BUTTON_TYPES = { button: "button", reset: "reset", submit: "submit" };

const Button = React.forwardRef((props, ref) => {
  const {
    icon = null,
    iconPosition = "left",
    iconSize = 16,
    label = "",
    loading = false,
    onClick = noop,
    to = null,
    type = "button",
    style = "primary",
    fullWidth = false,
    className = "",
    disabled = false,
    size = "medium",
    href = null,
    ...otherProps
  } = props;

  const handleClick = (e) => {
    if (!loading && !disabled) {
      onClick(e);
    }
  };

  let Parent, elementSpecificProps;
  if (to) {
    Parent = Link;
    elementSpecificProps = { to };
  } else if (href) {
    Parent = motion.a;
    elementSpecificProps = { href };
  } else {
    Parent = motion.button;
    elementSpecificProps = {
      type,
    };
  }

  const Icon =
    typeof icon == "string"
      ? () => <i className={classnames("cs-ui-btn__icon", [icon])} />
      : icon || React.Fragment;

  const spinnerMarginSide =
    iconPosition === "left" ? "marginRight" : "marginLeft";

  return (
    <span className="inline-block">
      <Parent
        ref={ref}
        onClick={handleClick}
        className={classnames("cs-ui-btn", [className], {
          "cs-ui-btn--style-primary": style === BUTTON_STYLES.primary,
          "cs-ui-btn--style-secondary": style === BUTTON_STYLES.secondary,
          "cs-ui-btn--style-danger": style === BUTTON_STYLES.danger,
          "cs-ui-btn--style-text": style === BUTTON_STYLES.text,
          "cs-ui-btn--size-large": size === BUTTON_SIZES.large,
          "cs-ui-btn--size-medium": size === BUTTON_SIZES.medium,
          "cs-ui-btn--size-small": size === BUTTON_SIZES.small,
          "cs-ui-btn--width-full": fullWidth,
          "cs-ui-btn--icon": icon,
          "cs-ui-btn--icon-left": iconPosition === ICON_POSITIONS.left,
          "cs-ui-btn--size-large--icon-right":
            size === BUTTON_SIZES.large &&
            iconPosition === ICON_POSITIONS.right,
          "cs-ui-btn--icon-only": !label,
          disabled: disabled,
        })}
        disabled={disabled}
        {...elementSpecificProps}
        {...otherProps}
      >
        {label && <span>{label}</span>}

        <AnimatePresence exitBeforeEnter>
          {icon ? (
            /* When Icon is present, animate between the icon and the spinner*/
            loading ? (
              <Spinner key="1" size={iconSize} className="cs-ui-btn__spinner" />
            ) : (
              <Icon key="2" size={iconSize} className="cs-ui-btn__icon" />
            )
          ) : (
            /* When Icon is not present, animate the margin from 0 to the needed value*/
            loading && (
              <motion.div
                className="cs-ui-btn__spinner-wrapper"
                initial={{ [spinnerMarginSide]: 0, width: 0, scale: 0 }}
                animate={{
                  [spinnerMarginSide]: ".7142857143em",
                  width: "auto",
                  scale: 1,
                }}
                exit={{ [spinnerMarginSide]: 0, width: 0, scale: 0 }}
                transition={{ bounce: false }}
              >
                <Spinner key="3" />
              </motion.div>
            )
          )}
        </AnimatePresence>
      </Parent>
    </span>
  );
});

Button.propTypes = {
  /**
   * Specifies the style of the button.
   */
  style: PropTypes.oneOf(Object.values(BUTTON_STYLES)),
  /**
   * Set the size of the button.
   */
  size: PropTypes.oneOf(Object.values(BUTTON_SIZES)),
  /**
   * Specifies the position of the icon.
   */
  iconPosition: PropTypes.oneOf(Object.values(ICON_POSITIONS)),
  /**
   * Text to be displayed inside the button.
   */
  label: PropTypes.string,
  /**
   * Indicates if a button is in loading state and shows spinner if true.
   */
  loading: PropTypes.bool,
  /**
   * Set button as disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Icon to be shown in the button.
   */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  onClick: PropTypes.func,
  /**
   * Specifies an internal route to which the button points to.
   */
  to: PropTypes.string,
  /**
   * Specify an external link to which the button points to.
   */
  href: PropTypes.string,
  /**
   * Specify the type of button.
   */
  type: PropTypes.oneOf(Object.values(BUTTON_TYPES)),
  /**
   * Button will be of full width of the container.
   */
  fullWidth: PropTypes.bool,
  /**
   * Use external classnames as override to csUI button.
   */
  className: PropTypes.string,
};

export default Button;
