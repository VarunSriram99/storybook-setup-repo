import React from "react";

import classNames from "classnames";
import { Tooltip } from "neetoui";

import { Check } from "icons";

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

export default Steps;
