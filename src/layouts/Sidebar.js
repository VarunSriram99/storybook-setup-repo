import React, { useState, useEffect } from "react";

import classnames from "classnames";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";

import { pathOr } from "ramda";

import { Avatar, Dropdown, Tooltip, Typography, Tag } from "neetoui";

import { LeftArrow, RightArrow, DownArrow, Star } from "icons";

export const ProfileSection = ({ collapsed, profileInfo, onClick }) => {
  const truncate = (str, length) => {
    return str && str.length > length
      ? str.substring(0, length - 3) + "..."
      : str;
  };

  const dataCy = profileInfo["data-cy"] || "profile-section";

  return (
    <div onClick={onClick} data-cy={dataCy}>
      <div className="flex items-center flex-shrink-0 cs-ui-sidebar__profile">
        <Avatar user={profileInfo} size="large" className="flex-shrink-0" />
        {!collapsed && (
          <div className="cs-ui-sidebar__profile-content">
            <Typography
              component="h2"
              style="h5"
              weight="semibold"
              className="m-0"
              title={profileInfo.name}
            >
              {truncate(profileInfo.name, 18)}
            </Typography>
            <DownArrow
              size={16}
              className="cs-ui-sidebar__profile-drop-icon"
              color="#68737D"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export const NavIconWrapper = ({ collapsed, mainLabel, children }) =>
  collapsed ? (
    <Tooltip position="right" content={mainLabel}>
      {children}
    </Tooltip>
  ) : (
    children
  );

const Sidebar = ({
  organizationInfo,
  navLinks,
  footerLinks = [],
  profileInfo,
  isCollapsed = false,
  collapsible = true,
  onCollapse,
  showChangelog = false,
  changelogProps = {},
}) => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(isCollapsed);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const Logo = organizationInfo?.logo;
  const LogoSVG = Logo;
  const toggleCollapse =
    onCollapse || (() => setCollapsed(collapsed => !collapsed));

  const { icon: ChangelogIcon, ...otherChangelogProps } = changelogProps;
  const ChangelogIconSVG = ChangelogIcon || Star;

  useEffect(() => {
    setCollapsed(isCollapsed);
  }, [isCollapsed]);

  const variants = {
    expanded: { maxWidth: 320 },
    collapsed: { maxWidth: 80 },
  };

  return (
    <motion.div
      animate={collapsed ? "collapsed" : "expanded"}
      variants={variants}
      transition={{ duration: 0.3 }}
      className={classnames(
        "cs-ui-sidebar flex flex-col flex-shrink-0 overflow-y-auto overflow-x-hidden",
        {
          "cs-ui-sidebar--collapsed": collapsed,
        }
      )}
    >
      <div className="cs-ui-sidebar__links">
        {navLinks.map(
          (
            { label: mainLabel, to: mainRoute, icon, items, ...otherProps },
            mainIndex
          ) => {
            const IconSVG = icon;
            const isActive = items?.length
              ? items.some(({ to }) => location.pathname.includes(to))
              : location.pathname.includes(mainRoute);
            const shouldOpenSidebar = items && collapsed;
            const to =
              shouldOpenSidebar && isActive
                ? location.pathname
                : pathOr(mainRoute, [0, "to"], items);
            return (
              <React.Fragment key={mainIndex}>
                <NavLink
                  to={to}
                  className="flex items-center no-underline select-none cs-ui-sidebar__link"
                  activeClassName="active"
                  isActive={() => isActive}
                  onClick={() => shouldOpenSidebar && toggleCollapse()}
                  {...otherProps}
                >
                  {icon && (
                    <NavIconWrapper collapsed={collapsed} mainLabel={mainLabel}>
                      <div className="flex items-center justify-center cs-ui-sidebar__link-icon">
                        <IconSVG />
                      </div>
                    </NavIconWrapper>
                  )}
                  {!collapsed && (
                    <Typography
                      component="span"
                      style="body2"
                      weight="medium"
                      className="cs-ui-sidebar__link-label"
                    >
                      {mainLabel}
                    </Typography>
                  )}
                </NavLink>
                {items && isActive && !collapsed && (
                  <>
                    {items.map(
                      (
                        { label: subLabel, to: subRoute, ...otherProps },
                        subIndex
                      ) => {
                        return (
                          <NavLink
                            key={subIndex}
                            to={subRoute}
                            className="flex items-center select-none cs-ui-sidebar__sublink"
                            activeClassName="active"
                            {...otherProps}
                          >
                            {!collapsed && (
                              <Typography
                                component="span"
                                style="body2"
                                weight="medium"
                                className="flex-grow cs-ui-sidebar__link-sub-label"
                              >
                                {subLabel}
                              </Typography>
                            )}
                          </NavLink>
                        );
                      }
                    )}
                  </>
                )}
              </React.Fragment>
            );
          }
        )}
      </div>

      <div className="cs-ui-sidebar__footer">
        {footerLinks?.map(({ label, href, to, icon, ...otherProps }, index) => {
          const IconSVG = icon;
          const isActive = location.pathname.includes(to);
          const Link = href ? "a" : NavLink;
          return (
            <Link
              key={index}
              to={to}
              href={href}
              className="flex items-center no-underline select-none cs-ui-sidebar__link"
              activeClassName="active"
              isActive={() => isActive}
              {...otherProps}
            >
              {icon && (
                <NavIconWrapper collapsed={collapsed} mainLabel={label}>
                  <div className="flex items-center justify-center cs-ui-sidebar__link-icon">
                    <IconSVG />
                  </div>
                </NavIconWrapper>
              )}
              {!collapsed && (
                <Typography
                  component="span"
                  style="body2"
                  weight="medium"
                  className="cs-ui-sidebar__link-label"
                >
                  {label}
                </Typography>
              )}
            </Link>
          );
        })}

        {showChangelog && (
          <div
            className="flex items-center no-underline select-none cs-ui-sidebar__link"
            {...otherChangelogProps}
          >
            <NavIconWrapper collapsed={collapsed} mainLabel="What's New">
              <div className="flex items-center justify-center cs-ui-sidebar__link-icon">
                <ChangelogIconSVG />
              </div>
            </NavIconWrapper>
            {!collapsed && (
              <Typography
                component="span"
                style="body2"
                weight="medium"
                className="cs-ui-sidebar__link-label"
              >
                What's New
              </Typography>
            )}
          </div>
        )}

        {profileInfo && (
          <Dropdown
            customTarget={() => (
              <ProfileSection
                collapsed={collapsed}
                profileInfo={profileInfo}
                onClick={() => {
                  setIsProfileDropdownOpen(!isProfileDropdownOpen);
                }}
              />
            )}
            isOpen={isProfileDropdownOpen}
            onClose={() => setIsProfileDropdownOpen(false)}
            position={collapsed ? "bottom-end" : "bottom-end"}
            closeOnEsc={true}
            closeOnSelect={true}
            closeOnOutsideClick={true}
          >
            {profileInfo.dropdownProps?.map(
              ({ onClick, label, ...otherProps }, idx) => (
                <li key={idx} onClick={onClick} {...otherProps}>
                  {label}
                </li>
              )
            )}
          </Dropdown>
        )}

        {collapsible && (
          <button
            onClick={toggleCollapse}
            className="flex items-center justify-start w-full mb-0 bg-transparent shadow-none select-none cs-ui-sidebar__link cs-ui-sidebar__link--button"
          >
            <span className="flex items-center justify-center cs-ui-sidebar__link-icon">
              {!collapsed ? <LeftArrow size={16} /> : <RightArrow size={16} />}
            </span>
            {!collapsed && (
              <Typography
                component="span"
                style="body2"
                weight="medium"
                className="text-left cs-ui-sidebar__link-label"
              >
                {!collapsed ? "Collapse" : ""}
              </Typography>
            )}
          </button>
        )}
      </div>
    </motion.div>
  );
};

Sidebar.propTypes = {
  organizationInfo: PropTypes.shape({
    logo: PropTypes.element,
    name: PropTypes.string,
    subdomain: PropTypes.string,
  }),
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      to: PropTypes.string,
      icon: PropTypes.element,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string,
          to: PropTypes.string,
        })
      ),
    })
  ),
  footerLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      to: PropTypes.string,
      href: PropTypes.string,
      icon: PropTypes.element,
    })
  ),
  profileInfo: PropTypes.shape({
    name: PropTypes.string,
    dropdownProps: PropTypes.arrayOf(
      PropTypes.shape({
        onClick: PropTypes.func,
        label: PropTypes.string,
      })
    ),
  }),
  isCollapsed: PropTypes.bool,
  collapsible: PropTypes.bool,
  onCollapse: PropTypes.func,
  showChangelog: PropTypes.bool,
  changelogProps: PropTypes.shape({
    id: PropTypes.string,
    icon: PropTypes.element,
    onClick: PropTypes.func,
  }),
  appName: PropTypes.string,
};

export default Sidebar;
