/** Icons generated by create-react-icons. Don't edit this file directly. **/
import React from "react";
import PropTypes from "prop-types";

export function Phone(props) {
  const { size, color, ...other } = props;
  return (
    <svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...other}>
      <path
        d="M11.0326 12.9677C10.0429 11.9781 9.29682 10.87 8.80111 9.74589C8.69622 9.5082 8.75797 9.22991 8.94153 9.04636L9.63433 8.35445C10.2019 7.78688 10.2019 6.98417 9.70623 6.48849L8.71314 5.49546C8.05249 4.83485 6.98157 4.83485 6.32091 5.49546L5.76938 6.04696C5.14257 6.67374 4.88118 7.57796 5.05036 8.47456C5.46824 10.6848 6.75233 13.1048 8.82395 15.1763C10.8956 17.2478 13.3157 18.5318 15.5261 18.9496C16.4227 19.1188 17.327 18.8574 17.9538 18.2307L18.5045 17.68C19.1652 17.0194 19.1652 15.9485 18.5045 15.2879L17.5123 14.2957C17.0166 13.8001 16.2129 13.8001 15.7181 14.2957L14.9542 15.0604C14.7707 15.2439 14.4924 15.3057 14.2547 15.2008C13.1305 14.7043 12.0223 13.9574 11.0326 12.9677V12.9677Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

Phone.defaultProps = {
  color: "currentColor",
  size: 24,
};

Phone.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
