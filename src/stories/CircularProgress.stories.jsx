import React from "react";

import CircularProgress from "../components/CircularProgress";

export default {
  title: "Components/CircularProgress",
  component: CircularProgress,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          '`import { CircularProgress } from "clearsense-ui/components";`',
      },
    },
  },
};

const Template = (args) => <CircularProgress {...args} />;

export const CircularProgressWithPercentage = Template.bind({});
CircularProgressWithPercentage.args = {
  percentage: 20,
};
