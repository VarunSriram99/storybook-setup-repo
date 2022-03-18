import React from 'react';

import Checkbox from '../components/Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Checkbox } from "clearsense-ui/components";`',
      },
    },
  },
};

const Template = (args) => <Checkbox {...args} />;

export const CheckboxRegular = Template.bind({});
CheckboxRegular.args = {
  label: "Checkbox"
};

export const CheckboxWithError = Template.bind({});
CheckboxWithError.args = {
  label: "Checkbox",
  error: "This is an error"
};

