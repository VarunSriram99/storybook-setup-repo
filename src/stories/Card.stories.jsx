import * as React from "react";

import Card from "../components/Card";

import { BrowserRouter } from "react-router-dom";

export default {
  title: "Components/Card",
  component: Card,
  subcomponents: {
    Item: Card.Item,
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          '`import { Card } from "clearsense-ui/components";`<br/>The card component is rendered as a button or a Navlink depending on whether the `to` prop is defined with a link. If `to` is specified the card is rendered as a Navlink',
      },
    },
  },
};

export const CardStory = (args) => {
  return (
    <Card {...args}>
      <Card.Item
        title="Card"
        count={0}
        footerLabelLeft="Meta"
        footerLabelRight="Meta"
      />
    </Card>
  );
};

CardStory.storyName = "Single Card";

const Template = (args) => {
  return (
    <Card {...args}>
      <Card.Item
        title="Card 1"
        count={0}
        footerLabelLeft="Meta"
        footerLabelRight="Meta"
      />
      <Card.Item
        title="Card 2"
        count={10}
        footerLabelLeft="Meta"
        footerLabelRight="Meta"
        active
      />
      <Card.Item
        title="Card 3"
        count={45}
        footerLabelLeft="Meta"
        footerLabelRight="Meta"
      />
    </Card>
  );
};

export const MultipleCardsStory = Template.bind({});
MultipleCardsStory.storyName = "Multiple Cards";

export const CardAsANavlink = (args) => {
  return (
    <BrowserRouter>
      <Card {...args}>
        <Card.Item
          title="Card 1"
          count={0}
          footerLabelLeft="Meta"
          footerLabelRight="Meta"
          to="#"
        />
        <Card.Item
          title="Card 2"
          count={10}
          footerLabelLeft="Meta"
          footerLabelRight="Meta"
          to="#"
        />
        <Card.Item
          title="Card 3"
          count={45}
          footerLabelLeft="Meta"
          footerLabelRight="Meta"
          to="#"
        />
      </Card>
    </BrowserRouter>
  );
};

CardAsANavlink.args = {
  layout: "default",
};
