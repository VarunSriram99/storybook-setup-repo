import React from 'react';

import Switch from '../components/Switch';

export default {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Switch } from "clearsense-ui/components";`',
      },
    },
  },
};

const Template = (args) => <Switch {...args} />;

export const SwitchPrimary = Template.bind({});
SwitchPrimary.args = {
  label: "Switch"
};

export const SwitchWithError = Template.bind({});
SwitchWithError.args = {
    label: "Switch",
    error: "Error",
    required: true,
};
