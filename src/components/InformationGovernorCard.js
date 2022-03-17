import React from "react";

import Avatar from "./Avatar";
import Typography from "./Typography";

import classNames from "classnames";

const InformationGovernorCard = ({ name, email, imageUrl, className }) => {
  return (
    <div
      className={classNames("cs-ui-information-governor-card", className)}
      title="information-governor-card"
    >
      <Typography
        style="small"
        type="boldUppercase"
        className="cs-ui-information-governor-card__role"
      >
        Information Governor
      </Typography>
      <div className="cs-ui-information-governor-card__user">
        <Avatar size="large" user={{ name: name, imageUrl: imageUrl }} />
        <div>
          <Typography style="condensedMedium" type="bold">
            {name}
          </Typography>
          <Typography className="cs-ui-information-governor-card__email">
            {email}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default InformationGovernorCard;
