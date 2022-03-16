/** Icons generated by create-react-icons. Don't edit this file directly. **/
import React from "react";
import PropTypes from "prop-types";

export function LeftArrow(props) {
  const { size, color, ...other } = props;
  return (
    <svg
      viewBox="0 0 17 14"
      fill="none"
      height={size}
      width={size}
      title="left-arrow"
      {...other}
    >
      <path
        d="M7.01303 0.988098L1.00203 7.0001L7.01303 13.0121M1.01003 6.9801H16H1.01003Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

LeftArrow.defaultProps = {
  color: "currentColor",
  size: 24,
};

LeftArrow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
