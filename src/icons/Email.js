/** Icons generated by create-react-icons. Don't edit this file directly. **/
import React from "react";
import PropTypes from "prop-types";

export function Email(props) {
  const { size, color, ...other } = props;
  return (
    <svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...other}>
      <path
        d="M19 18.9812H5C3.895 18.9812 3 18.0862 3 16.9812V7.01922C3 5.91422 3.895 5.01922 5 5.01922H19C20.105 5.01922 21 5.91422 21 7.01922V16.9822C21 18.0862 20.105 18.9812 19 18.9812V18.9812Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 9L12 12L7 9"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

Email.defaultProps = {
  color: "currentColor",
  size: 24,
};

Email.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
