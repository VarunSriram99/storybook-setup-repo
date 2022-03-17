import React from 'react';

import Avatar from '../components/Avatar';
import Typography from '../components/Typography';

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
  size: 'medium',
  user: {name: "Sample User", imageUrl: "https://randomuser.me/api/portraits/lego/5.jpg"},
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  user: {name: "Sample User", imageUrl: "https://randomuser.me/api/portraits/lego/5.jpg"},
};

export const XLarge = Template.bind({});
XLarge.args = {
  size: 'xlarge',
  user: {name: "Sample User", imageUrl: "https://randomuser.me/api/portraits/lego/5.jpg"},
};

export const AllVariants = () => (
  <div className='flex gap-4'>
    <div className='border-blue-500 border-dotted border p-8 flex flex-col items-center gap-4 w-1/3'>
      <Typography style="h4" type="boldUppercase" >No name and no image</Typography>
      <Avatar size="small" />
      <Avatar size="medium" />
      <Avatar size="large" />
      <Avatar size="xlarge" />
    </div>
    <div className='border-blue-500 border-dotted border p-8 flex flex-col items-center gap-4 w-1/3'>
      <Typography style="h4" type="boldUppercase" >Name Given (Oliver Smith)</Typography>
      <Avatar size="small" user={{name: "Oliver Smith"}} />
      <Avatar size="medium" user={{name: "Oliver Smith"}} />
      <Avatar size="large" user={{name: "Oliver Smith"}} />
      <Avatar size="xlarge" user={{name: "Oliver Smith"}} />
    </div>
    <div className='border-blue-500 border-dotted border p-8 flex flex-col items-center gap-4 w-1/3'>
      <Typography style="h4" type="boldUppercase" >Image Given</Typography>
      <Avatar size="small" user={{imageUrl: "https://randomuser.me/api/portraits/lego/5.jpg"}} />
      <Avatar size="medium" user={{imageUrl: "https://randomuser.me/api/portraits/lego/5.jpg"}} />
      <Avatar size="large" user={{imageUrl: "https://randomuser.me/api/portraits/lego/5.jpg"}} />
      <Avatar size="xlarge" user={{imageUrl: "https://randomuser.me/api/portraits/lego/5.jpg"}} />
    </div>
  </div>
)