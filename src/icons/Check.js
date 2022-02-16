/** Icons generated by create-react-icons. Don't edit this file directly. **/
import React from "react";
import PropTypes from "prop-types";

export function Check(props) {
  const { size, color, ...other } = props;
  return (
    <svg viewBox="0 0 16 11" fill="none" height={size} width={size} {...other}>
      <path
        d="M15 1L5.375 10L1 5.90909"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

Check.defaultProps = {
  color: "currentColor",
  size: 24,
};

Check.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
