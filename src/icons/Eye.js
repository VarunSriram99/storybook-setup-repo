/** Icons generated by create-react-icons. Don't edit this file directly. **/
import React from "react";
import PropTypes from "prop-types";

export function Eye(props) {
  const { size, color, ...other } = props;
  return (
    <svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...other}>
      <path
        d="M3.11799 12.467C2.96099 12.176 2.96099 11.823 3.11799 11.532C5.00999 8.033 8.50499 5 12 5C15.495 5 18.99 8.033 20.882 11.533C21.039 11.824 21.039 12.177 20.882 12.468C18.99 15.967 15.495 19 12 19C8.50499 19 5.00999 15.967 3.11799 12.467V12.467Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.1213 9.87868C15.2929 11.0503 15.2929 12.9498 14.1213 14.1213C12.9497 15.2929 11.0502 15.2929 9.87865 14.1213C8.70708 12.9498 8.70708 11.0503 9.87865 9.87868C11.0502 8.70711 12.9497 8.70711 14.1213 9.87868Z"
        stroke={color}
        strokeWidth="1.429"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

Eye.defaultProps = {
  color: "currentColor",
  size: 24,
};

Eye.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};