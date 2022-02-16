import React from 'react';

import Button from '../components/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  style: "primary",
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  style: 'secondary',
  label: 'Button',
};

export const Text = Template.bind({});
Text.args = {
  style: 'text',
  label: 'Button',
};
