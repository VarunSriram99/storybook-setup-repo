import React from "react";

import Tooltip from "../components/Tooltip";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Tooltip } from "clearsense-ui/components";`',
      },
    },
  },
};

const Template = (args) => (
  <div>
    <Tooltip {...args}>This a message with a tooltip</Tooltip>
  </div>
);

export const TooltipStory = Template.bind({});
TooltipStory.args = {
  content: "Tooltip",
};
