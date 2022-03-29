import React, { useState } from "react";
import { Check } from "../assets/icons";

import Button from "../components/Button";
import Pane from "../components/Pane";
import Typography from "../components/Typography";

export default {
  title: "Components/Pane",
  component: Pane,
  subcomponents: {
    "Pane.Header": Pane.Header,
    "Pane.Body": Pane.Body,
    "Pane.Footer": Pane.Footer,
    Button,
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Pane } from "clearsense-ui/components";`',
      },
    },
  },
};

export const Panes = () => {
  const [showPane, setShowPane] = useState(false);
  return (
    <div className="w-full">
      <div className="space-y-6">
        <div className="w-1/2 space-y-8">
          <div className="flex flex-row items-center justify-start space-x-6">
            <Button label="Show Pane" onClick={() => setShowPane(true)} />
          </div>
        </div>
      </div>

      <Pane isOpen={showPane} onClose={() => setShowPane(false)}>
        <Pane.Header>
          <Typography style="h2" type="semibold">
            Typography
          </Typography>
        </Pane.Header>
        <Pane.Body>
          <Typography style="regular" className="mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem mollitia laborum cumque doloremque error ipsam ut,
            rem doloribus sunt beatae vel est esse voluptates, iusto nobis odit
            iste neque. Veniam.
          </Typography>
        </Pane.Body>
        <Pane.Footer className="flex items-center space-x-2">
          <Button
            icon={Check}
            size="large"
            label="Continue"
            onClick={() => setShowPane(false)}
          />
          <Button
            style="text"
            size="large"
            label="Cancel"
            onClick={() => setShowPane(false)}
          />
        </Pane.Footer>
      </Pane>
    </div>
  );
};
