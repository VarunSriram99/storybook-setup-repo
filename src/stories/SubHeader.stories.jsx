import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import SubHeader from '../components/SubHeader';
import Button from '../components/Button'

export default {
  title: 'Components/SubHeader',
  component: SubHeader,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { SubHeader } from "clearsense-ui/components";`',
      },
    },
  },
};

const Template = (args) => <BrowserRouter><SubHeader {...args} /></BrowserRouter>;

export const SubHeaderBreadcrumbs = Template.bind({});
SubHeaderBreadcrumbs.args = {
  breadcrumbs: [{link: '//', label: "First crumb"}, {link: '//', label: "First crumb"}, {link: '//', label: "Second crumb"}, {link: '//', label: "Last crumb"}]
};

export const SubHeaderWithActionBlock = Template.bind({});
SubHeaderWithActionBlock.args = {
    breadcrumbs: [{link: '/firstcrumb', label: "First crumb"}, {link: '/secondcrumb', label: "First crumb"}, {link: '/thirdcrumb', label: "Second crumb"}, {link: '/fourthcrumb', label: "Last crumb"}],
    actionBlock: <Button label="Action Block" />
};
