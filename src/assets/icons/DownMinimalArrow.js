/** Icons generated by create-react-icons. Don't edit this file directly. **/
import React from "react";
import PropTypes from "prop-types";

export function DownMinimalArrow(props) {
  const { size, color, ...other } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      height={size}
      width={size}
      title="down-minimal-arrow-ico"
      {...other}
    >
      <path
        d="M5.99998 9L12 15L18 9"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

DownMinimalArrow.defaultProps = {
  color: "currentColor",
  size: 24,
};

DownMinimalArrow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
