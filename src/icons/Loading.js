/** Icons generated by create-react-icons. Don't edit this file directly. **/
import React from "react";
import PropTypes from "prop-types";

export function Loading(props) {
  const { size, color, ...other } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      height={size}
      width={size}
      title="loading-ico"
      {...other}
    >
      <path
        d="M15.82 8.18L18.36 5.64M12 3V6.6V3ZM12 17.4V21V17.4ZM5.64 5.64L8.18 8.18L5.64 5.64ZM15.82 15.82L18.36 18.36L15.82 15.82ZM3 12H6.6H3ZM17.4 12H21H17.4ZM5.64 18.36L8.18 15.82L5.64 18.36Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

Loading.defaultProps = {
  color: "currentColor",
  size: 24,
};

Loading.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
