import React from 'react';

import Steps from '../components/Steps';

export default {
  title: 'Components/Steps',
  component: Steps,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Steps } from "clearsense-ui/components";`',
      },
    },
  },
};

const Template = (args) => <Steps {...args} />;

export const StepsPrimary = Template.bind({});
StepsPrimary.args = {
  steps: ["Step 1", "Step 2"]
};

export const StepsSecondary = Template.bind({});
StepsSecondary.args = {
  steps: ["Step 1", "Step 2"],
  style: "secondary",
};

export const StepsWithDifferentStates = Template.bind({});
StepsWithDifferentStates.args = {
  steps: ["Step 1", "Step 2", "Step 3"],
  currentStep: 2,
};

