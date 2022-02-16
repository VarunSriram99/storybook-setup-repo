import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const STYLES = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  jumbo: "jumbo",
  xLarge: "xLarge",
  large: "large",
  medium: "medium",
  small: "small",
  condensedLarge: "condensedLarge",
  condensedMedium: "condensedMedium",
};

const TYPES = {
  regular: "regular",
  bold: "bold",
  semibold: "semibold",
  boldUppercase: "boldUppercase",
  underline: "underline",
  uppercase: "uppercase",
};

const DEFAULT_COMPONENTS = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  jumbo: "div",
  xLarge: "div",
  large: "div",
  medium: "div",
  small: "div",
  condensedLarge: "div",
  condensedMedium: "div",
};

const COMPONENTS = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  span: "span",
  b: "b",
  strong: "strong",
  i: "i",
  em: "em",
  mark: "mark",
  del: "del",
  s: "s",
  ins: "ins",
  sub: "sub",
  sup: "sup",
  u: "u",
  code: "code",
  blockquote: "blockquote",
};

const Typography = React.forwardRef(
  (
    {
      style = "medium",
      type = "regular",
      component,
      children,
      className = "",
      ...otherProps
    },
    ref
  ) => {
    const Component = component
      ? COMPONENTS[component]
      : style
      ? DEFAULT_COMPONENTS[style]
      : "div";
    return (
      <Component
        ref={ref}
        className={classnames(
          {
            "cs-ui-typography": true,
            "cs-ui-text-h1": style === STYLES.h1,
            "cs-ui-text-h2": style === STYLES.h2,
            "cs-ui-text-h3": style === STYLES.h3,
            "cs-ui-text-h4": style === STYLES.h4,
            "cs-ui-text-h5": style === STYLES.h5,
            "cs-ui-text-h6": style === STYLES.h6,
            "cs-ui-text-jumbo": style === STYLES.jumbo,
            "cs-ui-text-x-large": style === STYLES.xLarge,
            "cs-ui-text-large": style === STYLES.large,
            "cs-ui-text-medium": style === STYLES.medium,
            "cs-ui-text-small": style === STYLES.small,
            "cs-ui-text-condensed-medium": style === STYLES.condensedMedium,
            "cs-ui-text-condensed-large": style === STYLES.condensedLarge,
            [className]: className,
          },
          {
            "cs-ui-text-regular": type === TYPES.regular,
            "cs-ui-text-bold": type === TYPES.bold,
            "cs-ui-text-semibold": type === TYPES.semibold,
            "cs-ui-text-bold-uppercase": type === TYPES.boldUppercase,
            "cs-ui-text-underline": type === TYPES.underline,
            "cs-ui-text-uppercase": type === TYPES.uppercase,
          }
        )}
        {...otherProps}
      >
        {children}
      </Component>
    );
  }
);

Typography.propTypes = {
  style: PropTypes.oneOf(Object.values(STYLES)),
  component: PropTypes.oneOf(Object.values(COMPONENTS)),
  otherProps: PropTypes.object,
};

export default Typography;
