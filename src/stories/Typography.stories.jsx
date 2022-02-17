import React from 'react';

import Typography from '../components/Typography';

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {text: {description: "This is not an actual prop. Anything to be displayed under that typography can be given as children of the tag."}}
};

const Template = (args) => <Typography {...args} >{args.text}</Typography>;

export const Jumbo = Template.bind({});
Jumbo.args = {
  text: "Sample text",
  style: "jumbo"
};

export const Heading1 = Template.bind({});
Heading1.args = {
  text: "Sample text",
  style: "h1"
};

export const Heading2 = Template.bind({});
Heading2.args = {
  text: "Sample text",
  style: "h2"
};

export const Heading3 = Template.bind({});
Heading3.args = {
  text: "Sample text",
  style: "h3"
};

export const Heading4 = Template.bind({});
Heading4.args = {
  text: "Sample text",
  style: "h4"
};

export const Heading5 = Template.bind({});
Heading5.args = {
  text: "Sample text",
  style: "h5"
};

export const Heading6 = Template.bind({});
Heading6.args = {
  text: "Sample text",
  style: "h6"
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  text: "Sample text",
  style: "xLarge"
};

export const Large = Template.bind({});
Large.args = {
  text: "Sample text",
  style: "large"
};

export const medium = Template.bind({});
medium.args = {
  text: "Sample text",
  style: "medium"
};

export const small = Template.bind({});
small.args = {
  text: "Sample text",
  style: "small"
};

export const CondensedLarge = Template.bind({});
CondensedLarge.args = {
  text: "Sample text",
  style: "condensedLarge"
};

export const CondensedMedium = Template.bind({});
CondensedMedium.args = {
  text: "Sample text",
  style: "condensedMedium"
};