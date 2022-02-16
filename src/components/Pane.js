import React, { useRef } from "react";

import classnames from "classnames";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import { useHotkeys } from "react-hotkeys-hook";

import { Close } from "icons";
import Button from "./Button";
import { Portal, Backdrop } from "../atoms";

import { useOnClickOutside } from "../utils/useOnClickOutside";

import {
  PANE_SIZE,
  BLUR_INITIAL,
  BLUR_FINAL,
  TRANSITION,
} from "../constants/overlay";

const noop = () => {};
const sizes = ["xs", "sm", "md", "lg", "xl"];

const Pane = ({
  size = "sm",
  isOpen,
  onClose = noop,
  loading = false,
  children,
  className = "",
  closeOnEsc = true,
  closeButton = true,
  backdropClassName = "",
  closeOnOutsideClick = true,
  hasFooter = true,
  ...otherProps
}) => {
  const paneWrapper = useRef();

  useOnClickOutside(paneWrapper, closeOnOutsideClick ? onClose : noop);
  useHotkeys("esc", closeOnEsc ? onClose : noop);

  return (
    <Portal className="neeto-ui-portal">
      <AnimatePresence>
        {isOpen && (
          <Backdrop
            key="pane-backdrop"
            className={classnames(
              "cs-ui-pane__backdrop flex justify-end",
              backdropClassName
            )}
          >
            <motion.div
              initial={{
                x: PANE_SIZE,
                filter: BLUR_FINAL,
              }}
              animate={{
                x: 0,
                filter: BLUR_INITIAL,
              }}
              transition={{
                bounce: false,
                duration: TRANSITION,
              }}
              ref={paneWrapper}
              key="pane-wrapper"
              data-cy="pane-wrapper"
              exit={{ x: PANE_SIZE, filter: BLUR_FINAL }}
              className={classnames("cs-ui-pane__wrapper", {
                "cs-ui-pane__wrapper--xs": size === "xs",
                "cs-ui-pane__wrapper--sm": size === "sm",
                "cs-ui-pane__wrapper--md": size === "md",
                "cs-ui-pane__wrapper--lg": size === "lg",
                "cs-ui-pane__wrapper--xl": size === "xl",
                "cs-ui-pane__wrapper--has-footer": hasFooter,
                [className]: className,
              })}
              {...otherProps}
            >
              {closeButton && (
                <Button
                  style="text"
                  icon={Close}
                  className="cs-ui-pane__close"
                  onClick={onClose}
                />
              )}
              {loading ? <></> : children}
            </motion.div>
          </Backdrop>
        )}
      </AnimatePresence>
    </Portal>
  );
};

Pane.propTypes = {
  size: PropTypes.oneOf(sizes),
  /**
   * To specify whether the pane component is open or not.
   */
  isOpen: PropTypes.bool,
  /**
   * To specify the callback which will be invoked when the pane is closed.
   */
  onClose: PropTypes.func,
  loading: PropTypes.bool,
  /**
   * To specify the content to be rendered inside the pane component.
   */
  children: PropTypes.node,
  /**
   * To provide external classname to the pane component.
   */
  className: PropTypes.string,
  /**
   * To specify whether the pane component should close on esc key press.
   */
  closeOnEsc: PropTypes.bool,
  /**
   * To specify whether the pane component should render close button.
   */
  closeButton: PropTypes.bool,
  /**
   * To specify the classname to be applied to the backdrop element.
   */
  backdropClassName: PropTypes.string,
  /**
   * To specify whether the pane component should close on outside click.
   */
  closeOnOutsideClick: PropTypes.bool,
};

export const Header = ({ children, className }) => {
  return (
    <div className={classnames("cs-ui-pane__header", className)}>
      {children}
    </div>
  );
};

Header.propTypes = {
  /**
   * To specify className to be applied to the pane header container.
   */
  className: PropTypes.string,
  children: PropTypes.node,
};

export const Body = ({ children, className }) => {
  return (
    <div className={classnames("cs-ui-pane__body", className)}>{children}</div>
  );
};

Body.propTypes = {
  /**
   * To specify className to be applied to the pane body container.
   */
  className: PropTypes.string,
  children: PropTypes.node,
};

export const Footer = ({ children, className }) => {
  return (
    <div className={classnames("cs-ui-pane__footer cs-ui-shadow-m", className)}>
      {children}
    </div>
  );
};

Footer.propTypes = {
  /**
   * To specify className to be applied to the pane footer container.
   */
  className: PropTypes.string,
  children: PropTypes.node,
  /**
   * To specify if the pane has a footer.
   * @default true
   */
  hasFooter: PropTypes.bool,
};

Pane.Header = Header;
Pane.Body = Body;
Pane.Footer = Footer;

export default Pane;
