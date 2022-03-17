import { useEffect, useState } from "react";
import classnames from "classnames";
import { Home, RightMinimalArrow } from '../assets/icons';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Typography } from "clearsense-ui/components";

const SubHeader = ({ breadcrumbs, actionBlock, className }) => {
  const [currentItem, setCurrentItem] = useState();

  useEffect(() => {
    setCurrentItem(breadcrumbs.pop());
  }, [breadcrumbs]);

  return (
    <header className={classnames("cs-ui-sub-header", className)}>
      <div>
        <div className="cs-ui-sub-header__navigation">
          <Home size={16} className="cs-ui-sub-header__navigation__icon" />
          {breadcrumbs.map((breadcrumb, idx) => (
            <Link
              to={breadcrumb.link}
              key={idx}
              className="cs-ui-sub-header__navigation__link"
            >
              <Typography
                style="h5"
                component="h5"
                className="cs-ui-sub-header__navigation__link__text"
              >
                {breadcrumb.label}
                {idx + 1 !== breadcrumbs.length && (
                  <RightMinimalArrow
                    size={16}
                    className="cs-ui-sub-header__navigation__icon"
                  />
                )}
              </Typography>
            </Link>
          ))}
        </div>
        <Typography
          style="h3"
          component="h3"
          className="cs-ui-sub-header__active text-content-darker"
        >
          {currentItem?.label}
        </Typography>
      </div>
      {actionBlock && <div>{actionBlock}</div>}
    </header>
  );
};

SubHeader.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, link: PropTypes.string })
  ).isRequired,
  actionBlock: PropTypes.node,
  className: PropTypes.string,
};

export default SubHeader;
