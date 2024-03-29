/** Icons generated by create-react-icons. Don't edit this file directly. **/
import React from "react";
import PropTypes from "prop-types";

export function DataHub(props) {
  const { size, color, ...other } = props;
  return (
    <svg viewBox="0 0 20 21" fill="none" height={size} width={size} {...other}>
      <path
        d="M8 19H2.714C1.768 19 1 18.232 1 17.286V13M14 2H17.286C18.232 2 19 2.768 19 3.714V7M5.56 7.19V10M3.56 10H7.56M12 12C12.001 10.896 13.568 10 15.5 10C17.432 10 19 10.895 18.999 12V18C18.999 19.105 17.432 20 15.499 20C13.566 20 12 19.104 12 18V12ZM1 6.062V2.125C1 1.504 1.504 1 2.125 1H9C9.621 1 10.125 1.504 10.125 2.125V6.063C10.125 6.684 9.621 7.188 9 7.188H2.125C1.504 7.188 1 6.684 1 6.062Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

DataHub.defaultProps = {
  color: "current",
  size: 24,
};

DataHub.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
