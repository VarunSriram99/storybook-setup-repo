import React from "react";

import classnames from "classnames";
import { NavLink } from "react-router-dom";

import Typography from "./Typography";
import { RightArrow } from '../assets/icons';

import PropTypes from 'prop-types';

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
  ...otherProps
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
      {...otherProps}
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

Card.propTypes = {
  /**
   * Add additional classNames to cards wrapper
   */
  className: PropTypes.string,
};


Card.Item = Item;

Item.propTypes = {
  /**
   * Specifies the count to be shown in the card
   */
  count: PropTypes.number,
  /**
   * Specifies title of the card
   */
  title: PropTypes.string,
  /**
   * The stats to be shown on the left side of footer
   */
  footerLabelLeft: PropTypes.string,
  /**
   * The stats to be shown on the right side of footer
   */
  footerLabelRight: PropTypes.string,
  /**
  * Specifies the function that should execute when card is clicked
  */
  onClick: PropTypes.func,
  /**
   * Specifies whether current card is active or not
   */
  active: PropTypes.bool,
  /**
   * The extra classNames to be provided to the card
   */
  className: PropTypes.string,
  /**
   * Specifies the link to be routed to when card is clicked
   */
  to: PropTypes.string,
};

export default Card;
