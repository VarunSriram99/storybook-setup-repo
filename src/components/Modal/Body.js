import React from "react";
import classnames from "classnames";

const Body = ({ children, className }) => (
  <div className={classnames("cs-ui-modal__body", className)}>{children}</div>
);

export default Body;
