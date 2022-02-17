import React from 'react';

import Input from '../components/Input';

export default {
  title: 'Components/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Input"
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: "Input"
};

export const Error = Template.bind({});
Error.args = {
  label: "Input",
  error: "Something went wrong!"
};

export const Sucess = Template.bind({});
Sucess.args = {
  label: "Input",
  successMessage: "Email is valid!"
};