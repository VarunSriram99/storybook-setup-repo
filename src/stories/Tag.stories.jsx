import React from "react";

import Tag from "../components/Tag";

export default {
  title: "Components/Tag",
  component: Tag,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Tag } from "clearsense-ui/components";`',
      },
    },
  },
};

const Template = (args) => (
  <div>
    <Tag {...args} />
  </div>
);

export const TagStory = Template.bind({});
TagStory.args = {
  label: "Tag",
  color: "#1087ee",
};

export const TagLarge = Template.bind({});
TagLarge.args = {
  label: "Tag",
  color: "#111111",
  size: "large",
};

export const TagLightColor = Template.bind({});
TagLightColor.args = {
  label: "Tag",
  color: "#ffaaaa",
};

export const TagDisabled = Template.bind({});
TagDisabled.args = {
  label: "Tag",
  color: "#ff0000",
  disabled: true,
};
