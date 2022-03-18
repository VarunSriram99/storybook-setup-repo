import React from 'react';

import InformationGovernorCard from '../components/InformationGovernorCard';

export default {
  title: 'Components/Information Governor Card',
  component: InformationGovernorCard,
};

const Template = (args) => <InformationGovernorCard {...args} />;

export const InformationGovernorCardSample = Template.bind({});
InformationGovernorCardSample.args = {
  name: "Sam Smith",
  email: "sam@example.com",
  imageUrl: "https://randomuser.me/api/portraits/lego/5.jpg",
};

export const InformationGovernorCardWithoutImageUrl = Template.bind({});
InformationGovernorCardWithoutImageUrl.args = {
  name: "Sam Smith",
  email: "sam@example.com",
};

