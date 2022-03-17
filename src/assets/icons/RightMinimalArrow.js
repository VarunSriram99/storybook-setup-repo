/** Icons generated by create-react-icons. Don't edit this file directly. **/
import React from "react";
import PropTypes from "prop-types";

export function RightMinimalArrow(props) {
  const { size, color, ...other } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      height={size}
      width={size}
      title="right-minimal-arrow-ico"
      {...other}
    >
      <path
        d="M8.99998 18L15 12L8.99998 6"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

RightMinimalArrow.defaultProps = {
  color: "currentColor",
  size: 24,
};

RightMinimalArrow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};