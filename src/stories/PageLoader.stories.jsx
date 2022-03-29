import React from "react";

import PageLoader from "../components/PageLoader";

export default {
  title: "Components/PageLoader",
  component: PageLoader,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { PageLoader } from "clearsense-ui/components";`',
      },
    },
  },
};

const Template = (args) => (
  <div className="h-screen w-full">
    <PageLoader {...args} />
  </div>
);

export const BasicUsage = Template.bind({});
BasicUsage.args = {};

export const LoadingText = () => {
  return (
    <div className="w-full" style={{ height: "calc(100vh/3)" }}>
      <PageLoader text="Loading..." />
    </div>
  );
};

export const LoadingWithColor = () => {
  return (
    <div className="w-full" style={{ height: "calc(100vh/3)" }}>
      <PageLoader text="Loading..." color="blue" />
    </div>
  );
};
