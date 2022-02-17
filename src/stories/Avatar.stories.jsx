import React from 'react';

import Avatar from '../components/Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
};

const Template = (args) => <div><Avatar {...args} /></div>;

export const Small = Template.bind({});
Small.args = {
  size: "small",
  user: {name: "Sample User", imageUrl: "https://randomuser.me/api/portraits/lego/5.jpg"},
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large'
};

export const XLarge = Template.bind({});
XLarge.args = {
  size: 'xlarge'
};