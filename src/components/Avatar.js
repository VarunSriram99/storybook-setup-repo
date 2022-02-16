import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { isNil } from "ramda";

import UserIcon from "../images/user.png";

const SIZE = {
  small: 24,
  medium: 32,
  large: 40,
  xlarge: 64,
};

const STATUS = {
  online: "online",
  idle: "idle",
  offline: "offline",
};

const COLORS = [
  "#E5E7EB",
  "#FECACA",
  "#FDE68A",
  "#A7F3D0",
  "#BFDBFE",
  "#C7D2FE",
  "#DDD6FE",
  "#FBCFE8",
];

const Avatar = ({
  size,
  user,
  isSquare,
  status,
  onClick,
  className,
  ...otherProps
}) => {
  const [loaded, setLoaded] = useState(false);

  const { name = "", imageUrl } = user;

  const isMedium = size === "medium";
  const isLarge = size === "large";
  const isXLarge = size === "xlarge";

  const getInitials = fullName => {
    const allNames = fullName.trim().split(" ");
    const initials = allNames.reduce((acc, curr, index) => {
      if (index === 0 || index === allNames.length - 1) {
        acc = `${acc}${curr.charAt(0).toUpperCase()}`;
      }
      return acc;
    }, "");
    return initials;
  };

  const avatarString = getInitials(name);

  const getRandomBackgroundColor = () => {
    const charCode =
      (avatarString.charCodeAt(0) || 0) + (avatarString.charCodeAt(1) || 0);
    const bgColor = COLORS[(charCode % 65) % COLORS.length] || COLORS[0];
    return bgColor;
  };

  const imageContainerStyle = {
    height: SIZE[size],
    width: SIZE[size],
    backgroundColor: getRandomBackgroundColor(),
  };

  const imageClasses = classNames("cs-ui-avatar", {
    "cs-ui-avatar--medium": isMedium,
    "cs-ui-avatar--large": isLarge,
    "cs-ui-avatar--xlarge": isXLarge,
    "cs-ui-avatar--round": !isSquare,
    hidden: !loaded,
  });

  const placeholderClasses = classNames("cs-ui-avatar__text", {
    "cs-ui-avatar__text-medium": isMedium,
    "cs-ui-avatar__text-large": isLarge,
    "cs-ui-avatar__text-xlarge": isXLarge,
  });

  // TODO: Remove 'v2' prefix.
  const statusClasses = classNames("cs-ui-avatar__status", `${status}`, {
    "cs-ui-avatar__status-medium": isMedium,
    "cs-ui-avatar__status-large": isLarge,
    "cs-ui-avatar__status-xlarge": isXLarge,
    "cs-ui-avatar__status-square": isSquare,
  });

  const Indicator = () =>
    isNil(status) ? React.Fragment : <span className={statusClasses} />;

  const ImagePlaceholder = () => (
    <span className={placeholderClasses}>{avatarString}</span>
  );

  const shouldDisplayInitials = avatarString && !imageUrl && !loaded;

  return (
    <span
      onClick={onClick}
      style={imageContainerStyle}
      className={classNames(
        "cs-ui-avatar--container",
        {
          "cs-ui-avatar--container-round": !isSquare,
        },
        className
      )}
      {...otherProps}
    >
      <Indicator />
      {shouldDisplayInitials ? (
        <ImagePlaceholder />
      ) : (
        <img
          className={imageClasses}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(false)}
          src={imageUrl || UserIcon}
          alt={`avatar-${avatarString}`}
        />
      )}
    </span>
  );
};

Avatar.defaultProps = {
  size: "medium",
  user: {
    imageUrl: "",
    name: "",
  },
  isSquare: false,
  onClick: () => {},
  status: null,
};

Avatar.propTypes = {
  /**
   * Specify the dimension for avatar component.
   */
  size: PropTypes.oneOf(Object.keys(SIZE)),
  user: PropTypes.shape({
    imageUrl: PropTypes.string,
    name: PropTypes.string,
  }),
  isSquare: PropTypes.bool,
  onClick: PropTypes.func,
  /**
   * Specify the status of the user if needed in avatar component.
   */
  status: PropTypes.oneOf(Object.keys(STATUS)),
  /**
   * Specify custom className to be applied on the Avatar Container
   */
  className: PropTypes.string,
};

export default Avatar;
