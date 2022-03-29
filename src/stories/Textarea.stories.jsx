import React from "react";

import Textarea from "../components/Textarea";
import Typography from "../components/Typography";

export default {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Textarea } from "clearsense-ui/components";`',
      },
    },
  },
};

const Template = (args) => <Textarea {...args} />;

export const General = Template.bind({});
General.args = {
  label: "Textarea",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Textarea",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Textarea",
};

export const Error = Template.bind({});
Error.args = {
  label: "Textarea",
  error: "Something went wrong!",
};

export const Sucess = Template.bind({});
Sucess.args = {
  label: "Textarea",
  successMessage: "Email is valid!",
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  label: "Textarea",
  placeholder: "Placeholder",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Textarea",
  placeholder: "Placeholder",
  disabled: true,
};

export const HelpText = Template.bind({});
HelpText.args = {
  label: "Textarea",
  helpText: "Help Text",
};

export const NakedTextArea = Template.bind({});
NakedTextArea.args = {
  label: "Textarea",
  nakedTextarea: true,
  placeholder: "Naked Textarea",
};

export const AllVariants = () => (
  <div className="flex gap-4">
    <div className="flex flex-col w-full items-center border border-dotted border-blue-500 gap-2 p-4">
      <Typography style="h3" type="boldUppercase">
        Small
      </Typography>
      <Typography style="h4" type="semibold">
        Regular Textarea
      </Typography>
      <Textarea label="Textarea" className="w-full" />
      <Typography style="h4" type="semibold">
        Textarea with error
      </Typography>
      <Textarea label="Textarea" error="Error" className="w-full" />
      <Typography style="h4" type="semibold">
        Textarea with success message
      </Typography>
      <Textarea label="Textarea" successMessage="Success" className="w-full" />
      <Typography style="h4" type="semibold">
        Textarea with help text
      </Typography>
      <Textarea label="Textarea" helpText="Help Text" className="w-full" />
      <Typography style="h4" type="semibold">
        Textarea with placeholder
      </Typography>
      <Textarea label="Textarea" placeholder="Placeholder" className="w-full" />
      <Typography style="h4" type="semibold">
        Disabled Textarea
      </Typography>
      <Textarea
        label="Textarea"
        disabled
        placeholder="Placeholder"
        className="w-full"
      />
      <Typography style="h4" type="semibold">
        Naked Textarea
      </Typography>
      <Textarea
        label="Textarea"
        placeholder="Placeholder"
        nakedTextarea
        className="w-full"
      />
    </div>
  </div>
);
