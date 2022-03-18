import React from 'react';

import Input from '../components/Input';
import Typography from '../components/Typography';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Input } from "clearsense-ui/components";`',
      },
    },
  },
};

const Template = (args) => <Input {...args} />;

export const General = Template.bind({});
General.args = {
  label: "Input"
};

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

export const Placeholder = Template.bind({});
Placeholder.args = {
  label: "Input",
  placeholder: "Placeholder"
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Input",
  placeholder: "Placeholder",
  disabled: true,
};

export const HelpText = Template.bind({});
HelpText.args = {
  label: "Input",
  helpText: "Help Text"
};

export const AllVariants = () => (
  <div className='flex gap-4'>
    <div className='flex flex-col w-1/2 items-center border border-dotted border-blue-500 gap-2 p-4' >
      <Typography style="h3" type="boldUppercase" >Small</Typography>
      <Typography style="h4" type="semibold" >Regular Input</Typography>
      <Input label="Input" className="w-full" />
      <Typography style="h4" type="semibold" >Input with error</Typography>
      <Input label="Input" error="Error" className="w-full" />
      <Typography style="h4" type="semibold" >Input with success message</Typography>
      <Input label="Input" successMessage="Success" className="w-full" />
      <Typography style="h4" type="semibold" >Input with help text</Typography>
      <Input label="Input" helpText="Help Text" className="w-full" />
      <Typography style="h4" type="semibold" >Input with placeholder</Typography>
      <Input label="Input" placeholder="Placeholder" className="w-full" />
      <Typography style="h4" type="semibold" >Disabled Input</Typography>
      <Input label="Input" disabled placeholder="Placeholder" className="w-full" />
    </div>
    <div className='flex flex-col w-1/2 items-center border border-dotted border-blue-500 gap-2 p-4' >
      <Typography style="h3" type="boldUppercase" >Large</Typography>
      <Typography style="h4" type="semibold" >Regular Input</Typography>
      <Input label="Input" className="w-full" size="large" />
      <Typography style="h4" type="semibold" >Input with error</Typography>
      <Input label="Input" error="Error" className="w-full" size="large" />
      <Typography style="h4" type="semibold" >Input with success message</Typography>
      <Input label="Input" successMessage="Success" className="w-full" size="large" />
      <Typography style="h4" type="semibold" >Input with help text</Typography>
      <Input label="Input" helpText="Help Text" className="w-full" size="large" />
      <Typography style="h4" type="semibold" >Input with placeholder</Typography>
      <Input label="Input" placeholder="Placeholder" className="w-full" size="large" />
      <Typography style="h4" type="semibold" >Disabled Input</Typography>
      <Input label="Input" disabled placeholder="Placeholder" className="w-full" size="large" />
    </div>
  </div>
)