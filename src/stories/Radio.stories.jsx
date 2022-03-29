import React from "react";

import Radio from "../components/Radio";
import Typography from "../components/Typography";

export default {
  title: "Components/Radio",
  component: Radio,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Radio } from "clearsense-ui/components";`',
      },
    },
  },
  subcomponents: { "Radio.Item": Radio.Item },
};

const Template = (args) => (
  <Radio {...args}>
    <Radio.Item name="radio" label="Option 1" />
    <Radio.Item name="radio" label="Option 1" />
  </Radio>
);

export const RadioNormal = Template.bind({});
RadioNormal.args = {
  label: "Radio",
};

export const RadioStackedOptions = Template.bind({});
RadioStackedOptions.args = {
  label: "Radio",
  stacked: true,
};

export const RadioWithError = Template.bind({});
RadioWithError.args = {
  label: "Radio",
  error: "Error",
};
