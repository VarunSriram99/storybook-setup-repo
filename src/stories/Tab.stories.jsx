import * as React from "react";

import Tab from '../components/Tab';
import Typography from "../components/Typography";

export default {
  title: "Components/Tab",
  component: Tab,
  subcomponents: {
    "Item": Tab.Item,
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Tab } from "clearsense-ui/components";`',
      },
    },
  },
};

export const TabStory = (args) => {
  return (
    <Tab {...args}>
      <Tab.Item active >Tab 1</Tab.Item>
    </Tab>
  );
};

TabStory.storyName = "Single Tab";

const Template = (args) => {
  return (
    <Tab {...args}>
        <Tab.Item active >Tab 1</Tab.Item>
        <Tab.Item >Tab 2</Tab.Item>
        <Tab.Item >Tab 3</Tab.Item>
    </Tab>
  );
};

export const MultipleTabsStory = Template.bind({});
MultipleTabsStory.storyName = "Multiple Tabs";

export const SecondaryStyleTags = Template.bind({});
SecondaryStyleTags.args = {
    style: "secondary",
}

export const LargeTabs = Template.bind({});
LargeTabs.args = {
    size: "large",
}

export const AllVariants = () => (
    <div className="flex gap-4" >
        <div className="flex flex-col items-center p-4 border border-dotted border-blue-500 gap-4 w-1/2" >
            <Typography style="h3" type="boldUppercase" >Default</Typography>
            <Tab>
                <Tab.Item active >Tab 1</Tab.Item>
                <Tab.Item >Tab 2</Tab.Item>
                <Tab.Item >Tab 3</Tab.Item>
            </Tab>
            <Tab style="secondary" >
                <Tab.Item active >Tab 1</Tab.Item>
                <Tab.Item >Tab 2</Tab.Item>
                <Tab.Item >Tab 3</Tab.Item>
            </Tab>
        </div>
        <div className="flex flex-col items-center p-4 border border-dotted border-blue-500 gap-4 w-1/2 " >
            <Typography style="h3" type="boldUppercase" >Large</Typography>
            <Tab size="large" className="w-full">
                <Tab.Item active >Tab 1</Tab.Item>
                <Tab.Item >Tab 2</Tab.Item>
                <Tab.Item >Tab 3</Tab.Item>
            </Tab>
            <Tab size="large" style="secondary" className="w-full" >
                <Tab.Item active >Tab 1</Tab.Item>
                <Tab.Item >Tab 2</Tab.Item>
                <Tab.Item >Tab 3</Tab.Item>
            </Tab>
        </div>
    </div>
)