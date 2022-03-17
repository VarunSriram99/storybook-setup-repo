/** Icons generated by create-react-icons. Don't edit this file directly. **/
import React from "react";
import PropTypes from "prop-types";

export function InProgress(props) {
  const { size, color, ...other } = props;
  return (
    <svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...other}>
      <circle cx="7.25" cy="11.25" r="1.25" fill={color} />
      <circle cx="12.25" cy="11.25" r="1.25" fill={color} />
      <circle cx="17.25" cy="11.25" r="1.25" fill={color} />
    </svg>
  );
}

InProgress.defaultProps = {
  color: "currentColor",
  size: 24,
};

InProgress.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
