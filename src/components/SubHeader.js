import { useEffect, useState } from "react";
import classnames from "classnames";
import { Home, RightMinimalArrow } from "../assets/icons";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Typography from "./Typography";

const SubHeader = ({ breadcrumbs, actionBlock, className }) => {
  const [currentItem, setCurrentItem] = useState();

  useEffect(() => {
    setCurrentItem(breadcrumbs[breadcrumbs.length - 1]);
  }, [breadcrumbs]);

  return (
    <header className={classnames("cs-ui-sub-header", className)}>
      <div>
        <div className="cs-ui-sub-header__navigation">
          <Home size={16} className="cs-ui-sub-header__navigation__icon" />
          {breadcrumbs
            .slice(0, breadcrumbs.length - 1)
            .map((breadcrumb, idx) => (
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
  /**
   * To specify the breadcrumbs of links followed to reach the page. An array of label and links. Links specify the url to be redirected to when crumb clicked.
   */
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, link: PropTypes.string })
  ).isRequired,
  /**
   * To specify the action block elements
   */
  actionBlock: PropTypes.node,
  /**
   * To specify the additional classnames to be provided to the subheader
   */
  className: PropTypes.string,
};

export default SubHeader;
