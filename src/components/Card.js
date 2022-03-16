import React from "react";

import classnames from "classnames";
import { NavLink } from "react-router-dom";

import Typography from "./Typography";
import { RightArrow } from '../assets/icons';

const noop = () => {};

const Card = ({ className, children, ...otherProps }) => {
  return (
    <div
      className={classnames("cs-ui-card__wrapper", className)}
      data-cy="card-container"
      title="card-container"
      {...otherProps}
    >
      {children}
    </div>
  );
};

const Item = ({
  count = 0,
  title = "",
  footerLabelLeft = "",
  footerLabelRight = "",
  onClick = noop,
  active,
  activeClassName = "",
  className,
  to,
}) => {
  const Parent = props =>
    to ? (
      <NavLink to={to} {...props}>
        {props.children}
      </NavLink>
    ) : (
      <button {...props}>{props.children}</button>
    );

  return (
    <Parent
      className={classnames(
        "cs-ui-card",
        className,
        { active: active },
        { activeClassName: activeClassName }
      )}
      onClick={onClick}
      title="card"
    >
      <div className="cs-ui-card__body">
        <div>
          <Typography
            style="h1"
            component="h4"
            type="bold"
            className="cs-ui-card__count"
          >
            {count.toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: true,
            })}
          </Typography>
          <Typography style="h3" type="bold" className="cs-ui-card__title">
            {title}
          </Typography>
        </div>
        <div className="cs-ui-card__body__icon">
          <RightArrow />
        </div>
      </div>
      <Typography
        style="condensedMedium"
        type="regular"
        className="cs-ui-card__footer"
      >
        {!!footerLabelLeft && <div>{footerLabelLeft}</div>}
        <Typography
          style="h2"
          type="bold"
          className="cs-ui-card__footer__seperator"
        >
          .
        </Typography>
        {!!footerLabelRight && <div>{footerLabelRight}</div>}
      </Typography>
    </Parent>
  );
};

Card.Item = Item;

export default Card;
