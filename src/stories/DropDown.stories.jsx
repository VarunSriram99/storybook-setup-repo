import React from "react";

import DropDown from "../components/DropDown";
import Typography from "../components/Typography";

import { RightArrow } from "../icons";

export default {
  title: "Components/DropDown",
  component: DropDown,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { DropDown } from "clearsense-ui/components";`',
      },
    },
  },
};

const Template = (args) => (
  <DropDown {...args}>
    <li>Option 1</li>
    <li>Option 2</li>
  </DropDown>
);

export const DropdownPrimary = Template.bind({});
DropdownPrimary.args = {
  label: "Dropdown",
};

export const DropdownSecondary = Template.bind({});
DropdownSecondary.args = {
  label: "DropDown",
  buttonStyle: "secondary",
};

export const DropdownText = Template.bind({});
DropdownText.args = {
  label: "DropDown",
  buttonStyle: "text",
};

export const AllVariants = () => (
  <div className="flex gap-4 overflow-auto">
    <div className="flex flex-col items-center border border-dotted border-blue-500 p-4 gap-4">
      <Typography style="h4" type="boldUppercase" className="whitespace-nowrap">
        Primary Button Styles
      </Typography>
      <Typography style="h5" type="semibold" className="whitespace-nowrap">
        Regular Dropdown
      </Typography>
      <DropDown label="DropDown">
        <li>Option 1</li>
        <li>Option 2</li>
      </DropDown>
      <Typography style="h5" type="semibold" className="whitespace-nowrap">
        Dropdown with icon on left
      </Typography>
      <DropDown label="DropDown" icon={RightArrow}>
        <li>Option 1</li>
        <li>Option 2</li>
      </DropDown>
      <Typography style="h5" type="semibold" className="whitespace-nowrap">
        Dropdown with icon on right
      </Typography>
      <DropDown
        label="DropDown"
        icon={RightArrow}
        buttonProps={{ iconPosition: "right" }}
      >
        <li>Option 1</li>
        <li>Option 2</li>
      </DropDown>
      <Typography style="h5" type="semibold" className="whitespace-nowrap">
        Dropdown with Dropdown strategy absolute
      </Typography>
      <DropDown label="DropDown" position="bottom">
        <li>Option 1</li>
        <li>Option 2</li>
      </DropDown>
      <Typography style="h5" type="semibold" className="whitespace-nowrap">
        Dropdown with Dropdown strategy fixed
      </Typography>
      <DropDown label="DropDown" position="bottom" strategy="fixed">
        <li>Option 1</li>
        <li>Option 2</li>
      </DropDown>
    </div>
    <div className="flex flex-col items-center border border-dotted border-blue-500 p-4 gap-4">
      <Typography style="h4" type="boldUppercase" className="whitespace-nowrap">
        Primary Button Styles
      </Typography>
      <Typography style="h5" type="semibold" className="whitespace-nowrap">
        Regular Dropdown
      </Typography>
      <DropDown label="DropDown" buttonStyle="secondary">
        <li>Option 1</li>
        <li>Option 2</li>
      </DropDown>
      <Typography style="h5" type="semibold" className="whitespace-nowrap">
        Dropdown with icon on left
      </Typography>
      <DropDown label="DropDown" icon={RightArrow} buttonStyle="secondary">
        <li>Option 1</li>
        <li>Option 2</li>
      </DropDown>
      <Typography style="h5" type="semibold" className="whitespace-nowrap">
        Dropdown with icon on right
      </Typography>
      <DropDown
        label="DropDown"
        icon={RightArrow}
        buttonProps={{ iconPosition: "right" }}
        buttonStyle="secondary"
      >
        <li>Option 1</li>
        <li>Option 2</li>
      </DropDown>
      <Typography style="h5" type="semibold" className="whitespace-nowrap">
        Dropdown with Dropdown strategy absolute
      </Typography>
      <DropDown label="DropDown" position="bottom" buttonStyle="secondary">
        <li>Option 1</li>
        <li>Option 2</li>
      </DropDown>
      <Typography style="h5" type="semibold" className="whitespace-nowrap">
        Dropdown with Dropdown strategy fixed
      </Typography>
      <DropDown
        label="DropDown"
        position="bottom"
        strategy="fixed"
        buttonStyle="secondary"
      >
        <li>Option 1</li>
        <li>Option 2</li>
      </DropDown>
    </div>
    <div className="flex flex-col items-center border border-dotted border-blue-500 p-4 gap-4">
      <Typography style="h4" type="boldUppercase" className="whitespace-nowrap">
        Primary Button Styles
      </Typography>
      <Typography style="h5" type="semibold" className="whitespace-nowrap">
        Regular Dropdown
      </Typography>
      <DropDown label="DropDown" buttonStyle="text">
        <li>Option 1</li>
        <li>Option 2</li>
      </DropDown>
      <Typography style="h5" type="semibold" className="whitespace-nowrap">
        Dropdown with icon on left
      </Typography>
      <DropDown label="DropDown" icon={RightArrow} buttonStyle="text">
        <li>Option 1</li>
        <li>Option 2</li>
      </DropDown>
      <Typography style="h5" type="semibold" className="whitespace-nowrap">
        Dropdown with icon on right
      </Typography>
      <DropDown
        label="DropDown"
        icon={RightArrow}
        buttonProps={{ iconPosition: "right" }}
        buttonStyle="text"
      >
        <li>Option 1</li>
        <li>Option 2</li>
      </DropDown>
      <Typography style="h5" type="semibold" className="whitespace-nowrap">
        Dropdown with Dropdown strategy absolute
      </Typography>
      <DropDown label="DropDown" position="bottom" buttonStyle="text">
        <li>Option 1</li>
        <li>Option 2</li>
      </DropDown>
      <Typography style="h5" type="semibold" className="whitespace-nowrap">
        Dropdown with Dropdown strategy fixed
      </Typography>
      <DropDown
        label="DropDown"
        position="bottom"
        strategy="fixed"
        buttonStyle="text"
      >
        <li>Option 1</li>
        <li>Option 2</li>
      </DropDown>
    </div>
  </div>
);
