import React from "react";
import Typography from "../components/Typography";

import Select from "../components/Select";

export default {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Select } from "clearsense-ui/components";`',
      },
    },
  },
};

const Template = (args) => <Select {...args} />;

export const SelectNormal = Template.bind({});
SelectNormal.args = {
  label: "Select",
  options: [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
  ],
};

export const SelectWithHelpText = Template.bind({});
SelectWithHelpText.args = {
  label: "Select",
  helpText: "Help Text",
  options: [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
  ],
};

export const SelectWithError = Template.bind({});
SelectWithError.args = {
  label: "Select",
  error: "Error",
  options: [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
  ],
};

export const SelectWithPlaceholder = Template.bind({});
SelectWithPlaceholder.args = {
  label: "Select",
  placeholder: "Some Placeholder",
  options: [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
  ],
};

export const SearchableSelect = Template.bind({});
SearchableSelect.args = {
  label: "Select",
  isSearchable: true,
  options: [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
    { label: "Option 3", value: 3 },
    { label: "Option 4", value: 4 },
  ],
};

export const SelectWithFixedStrategy = Template.bind({});
SelectWithFixedStrategy.args = {
  label: "Select",
  strategy: "fixed",
  options: [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
    { label: "Option 3", value: 3 },
    { label: "Option 4", value: 4 },
  ],
};

export const SelectWithDefaultValue = Template.bind({});
SelectWithDefaultValue.args = {
  label: "Select",
  options: [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
    { label: "Option 3", value: 3 },
    { label: "Option 4", value: 4 },
  ],
  defaultValue: { label: "Option 1", value: 1 },
};

export const SmallSelectBox = Template.bind({});
SmallSelectBox.args = {
  label: "Select",
  size: "small",
  options: [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
    { label: "Option 3", value: 3 },
    { label: "Option 4", value: 4 },
  ],
};

export const AllVariants = () => (
  <div className="flex gap-4">
    <div className="flex flex-col items-center p-4 gap-2 border border-dotted border-blue-500 w-1/2">
      <Typography style="h3" type="boldUppercase">
        Size Small
      </Typography>
      <Typography style="h4" type="semibold">
        Select
      </Typography>
      <Select
        options={[
          { label: "Option 1", value: 1 },
          { label: "Option 2", value: 2 },
        ]}
        size="small"
        className="w-full"
      />
      <Typography style="h4" type="semibold">
        Select with help text
      </Typography>
      <Select
        options={[
          { label: "Option 1", value: 1 },
          { label: "Option 2", value: 2 },
        ]}
        helpText="Help Text"
        size="small"
        className="w-full"
      />
      <Typography style="h4" type="semibold">
        Select with error
      </Typography>
      <Select
        options={[
          { label: "Option 1", value: 1 },
          { label: "Option 2", value: 2 },
        ]}
        error="Error"
        size="small"
        className="w-full"
      />
      <Typography style="h4" type="semibold">
        Select with placeholder
      </Typography>
      <Select
        options={[
          { label: "Option 1", value: 1 },
          { label: "Option 2", value: 2 },
        ]}
        placeholder="Random placeholder"
        size="small"
        className="w-full"
      />
      <Typography style="h4" type="semibold">
        Select with default value
      </Typography>
      <Select
        options={[
          { label: "Option 1", value: 1 },
          { label: "Option 2", value: 2 },
        ]}
        defaultValue={{ label: "Option 1", value: 1 }}
        size="small"
        className="w-full"
      />
      <Typography style="h4" type="semibold">
        Select with fixed strategy
      </Typography>
      <Select
        options={[
          { label: "Option 1", value: 1 },
          { label: "Option 2", value: 2 },
        ]}
        strategy="fixed"
        size="small"
        className="w-full"
      />
    </div>
    <div className="flex flex-col items-center p-4 gap-2 border border-dotted border-blue-500 w-1/2">
      <Typography style="h3" type="boldUppercase">
        Size Large
      </Typography>
      <Typography style="h4" type="semibold">
        Select
      </Typography>
      <Select
        options={[
          { label: "Option 1", value: 1 },
          { label: "Option 2", value: 2 },
        ]}
        size="large"
        className="w-full"
      />
      <Typography style="h4" type="semibold">
        Select with help text
      </Typography>
      <Select
        options={[
          { label: "Option 1", value: 1 },
          { label: "Option 2", value: 2 },
        ]}
        helpText="Help Text"
        size="large"
        className="w-full"
      />
      <Typography style="h4" type="semibold">
        Select with error
      </Typography>
      <Select
        options={[
          { label: "Option 1", value: 1 },
          { label: "Option 2", value: 2 },
        ]}
        error="Error"
        size="large"
        className="w-full"
      />
      <Typography style="h4" type="semibold">
        Select with placeholder
      </Typography>
      <Select
        options={[
          { label: "Option 1", value: 1 },
          { label: "Option 2", value: 2 },
        ]}
        placeholder="Random placeholder"
        size="large"
        className="w-full"
      />
      <Typography style="h4" type="semibold">
        Select with default value
      </Typography>
      <Select
        options={[
          { label: "Option 1", value: 1 },
          { label: "Option 2", value: 2 },
        ]}
        defaultValue={{ label: "Option 1", value: 1 }}
        size="large"
        className="w-full"
      />
      <Typography style="h4" type="semibold">
        Select with fixed strategy
      </Typography>
      <Select
        options={[
          { label: "Option 1", value: 1 },
          { label: "Option 2", value: 2 },
        ]}
        strategy="fixed"
        size="large"
        className="w-full"
      />
    </div>
  </div>
);
