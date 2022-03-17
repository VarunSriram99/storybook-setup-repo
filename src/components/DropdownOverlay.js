import React, { useState } from "react";

import classnames from "classnames";
import PropTypes from "prop-types";

import Button from "./Button";

const POSITION = { right: "right", left: "left" };

const DropdownOverlay = ({
  buttonLabel,
  buttonStyle = "primary",
  buttonProps,
  closeOnOutsideClick = true,
  children,
  position = "left",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="relative"
        onClick={() => closeOnOutsideClick && setIsOpen(false)}
        data-testid="dropdown-overlay-wrapper"
      >
        <Button
          label={buttonLabel}
          style={buttonStyle}
          onClick={e => {
            e.stopPropagation();
            setIsOpen(true);
          }}
          {...buttonProps}
        />
        {isOpen && (
          <>
            <div className="cs-ui-dropdown-overlay__bg-overlay" />
            <div
              onClick={e => e.stopPropagation()}
              className={classnames("cs-ui-dropdown-overlay__body", {
                "cs-ui-dropdown-overlay__body--left":
                  position === POSITION.left,
                "cs-ui-dropdown-overlay__body--right":
                  position === POSITION.right,
              })}
            >
              {typeof children === "function"
                ? children({ onClose: () => setIsOpen(false) })
                : children}
            </div>
          </>
        )}
      </div>
    </>
  );
};

DropdownOverlay.propTypes = {
  buttonLabel: PropTypes.string,
  buttonStyle: PropTypes.string,
  buttonProps: PropTypes.object,
  closeOnOutsideClick: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.instanceOf(Element),
  ]),
  position: PropTypes.oneOf(Object.values(POSITION)),
};

export default DropdownOverlay;
