import React from "react";

import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import PropTypes from 'prop-types';

const CircularProgress = ({ percentage = 0 }) => {
  return (
    <div data-testid="circular-progress">
      <CircularProgressbar
        className="cs-ui-circular-progress"
        value={percentage}
        text={`${percentage}%`}
        background={false}
        styles={buildStyles({
          pathColor: "#3DB461",
          trailColor: "#EBF4EC",
          textColor: "#3D404A",
          textSize: "2rem",
          pathTransitionDuration: 0.5,
        })}
      />
    </div>
  );
};

CircularProgress.propTypes = {
  percentage: PropTypes.number
}

export default CircularProgress;
