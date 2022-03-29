import React from "react";
import classnames from "classnames";

const Footer = ({ children, className }) => (
  <div className={classnames("cs-ui-modal__footer", className)}>{children}</div>
);

export default Footer;
