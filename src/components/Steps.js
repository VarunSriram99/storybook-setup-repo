import React from "react";

import classNames from "classnames";
import Tooltip from "./Tooltip";

import { Check } from "../assets/icons";
import PropTypes from "prop-types";

const STYLES = ["primary", "secondary"];

const Steps = ({ steps, currentStep, style = "primary", className }) => {
  return (
    <div className={classNames("cs-ui-steps", className)}>
      {steps.map((step, index) => (
        <div
          className={classNames("cs-ui-steps__step", {
            "cs-ui-steps__step--incomplete": currentStep < index + 1,
            "cs-ui-steps__step--current": currentStep === index + 1,
            "cs-ui-steps__step--secondary": style === "secondary",
          })}
          style={{ width: `${100 / steps.length}%` }}
        >
          <div
            className={classNames("cs-ui-steps__step__number-box", {
              "cs-ui-steps__step__number-box--incomplete":
                currentStep < index + 1,
              "cs-ui-steps__step__number-box--secondary": style === "secondary",
            })}
          >
            <span>
              {currentStep > index + 1 ? <Check strokeWidth={2} /> : index + 1}
            </span>
          </div>
          <Tooltip
            content={step}
            theme="light"
            position="bottom"
            followCursor="horizontal"
          >
            <div
              className={classNames("cs-ui-steps__step__title", {
                "cs-ui-steps__step__title--secondary": style === "secondary",
              })}
            >
              {step}
            </div>
          </Tooltip>
        </div>
      ))}
    </div>
  );
};

Steps.propTypes = {
  /**
   * To specify the array of all the step titles.
   */
  steps: PropTypes.arrayOf(PropTypes.string),
  /**
   * To specify the number of the current step starting from 1.
   */
  currentStep: PropTypes.number,
  /**
   * To specify the style of steps component
   */
  style: PropTypes.oneOf(STYLES),
  /**
   * To specify the additional classnames for the steps component
   */
  className: PropTypes.string,
};

export default Steps;
