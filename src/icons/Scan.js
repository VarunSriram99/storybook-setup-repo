/** Icons generated by create-react-icons. Don't edit this file directly. **/
import React from "react";
import PropTypes from "prop-types";

export function Scan(props) {
  const { size, color, ...other } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      height={size}
      width={size}
      title="scan-ico"
      {...other}
    >
      <path
        d="M5.671 4.257L13.414 12L12 13.414L5.68 7.094C4.50219 8.61296 3.91064 10.5052 4.01357 12.4246C4.11649 14.3439 4.90702 16.162 6.24052 17.5463C7.57401 18.9306 9.36133 19.7885 11.2755 19.9631C13.1897 20.1377 15.1027 19.6172 16.6646 18.497C18.2265 17.3768 19.3329 15.7317 19.7813 13.8626C20.2298 11.9935 19.9903 10.0255 19.1067 8.31853C18.2231 6.61156 16.7544 5.27978 14.9694 4.56684C13.1844 3.8539 11.2024 3.80745 9.386 4.436L7.85 2.9C9.15258 2.30526 10.5681 1.99828 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C1.99849 10.5178 2.32717 9.05379 2.96216 7.71445C3.59715 6.3751 4.52251 5.19402 5.671 4.257Z"
        fill={color}
      />
    </svg>
  );
}

Scan.defaultProps = {
  color: "currentColor",
  size: 24,
};

Scan.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};