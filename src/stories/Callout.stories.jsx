import React from "react";

import Callout from "../components/Callout";

import { Info as InfoIcon, Warning as WarningIcon, Error } from "../assets/icons";

export default {
  title: "Components/Callout",
  component: Callout,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Callout } from "clearsense-ui/components";`',
      },
    },
  },
};

const Template = (args) => <Callout {...args} >Callout text</Callout>;

export const Info = Template.bind({});
Info.args = {
  style: "info",
  icon: InfoIcon
};

export const Warning = Template.bind({});
Warning.args = {
  style: "warning",
  icon: WarningIcon,
};

export const Danger = Template.bind({});
Danger.args = {
  style: "danger",
  icon: Error,
};