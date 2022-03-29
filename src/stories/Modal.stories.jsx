import React, { useState } from "react";

import Button from "../components/Button";
import Modal from "../components/Modal";
import Typography from "../components/Typography";

export default {
  title: "Components/Modal",
  component: Modal,
  subcomponents: { Button },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Modal } from "clearsense-ui/components";`',
      },
    },
  },
};

export const Default = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full">
      <div className="space-y-6">
        <div className="w-1/2 space-y-8">
          <div className="flex flex-row items-center justify-start space-x-6">
            <Button label="Show Modal" onClick={() => setShowModal(true)} />
          </div>
        </div>
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      >
        <Modal.Header>
          <Typography style="h2" id="dialog1Title">
            Modal Title
          </Typography>
        </Modal.Header>
        <Modal.Body>
          <Typography style="large" lineHeight="normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius alias provident necessitatibus, eos autem corporis sunt reiciendis perspiciatis tenetur fugiat repellat. Totam hic facilis consectetur illum delectus, velit facere laboriosam?
          </Typography>
        </Modal.Body>
        <Modal.Footer className="space-x-2">
          <Button
            label="Continue"
            onClick={() => setShowModal(false)}
            size="large"
          />
          <Button
            style="text"
            label="Cancel"
            onClick={() => setShowModal(false)}
            size="large"
          />
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export const ModalSizing = () => {
  const [showModalExtraSmall, setShowModalExtraSmall] = useState(false);
  const [showModalSmall, setShowModalSmall] = useState(false);
  const [showModalMedium, setShowModalMedium] = useState(false);

  return (
    <div className="w-full">
      <div className="space-y-6">
        <div className="w-1/2 space-y-8">
          <div className="flex flex-row items-center justify-start space-x-6">
            <Button
              label="Extra Small"
              onClick={() => setShowModalExtraSmall(true)}
            />
            <Button label="Small" onClick={() => setShowModalSmall(true)} />
            <Button label="Medium" onClick={() => setShowModalMedium(true)} />
          </div>
        </div>
      </div>

      <Modal
        isOpen={showModalExtraSmall}
        onClose={() => setShowModalExtraSmall(false)}
        size="xs"
      >
        <Modal.Header>
          <Typography style="h2">
            Modal Title
          </Typography>
        </Modal.Header>
        <Modal.Body>
          <Typography style="large" lineHeight="normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </Modal.Body>
        <Modal.Footer className="space-x-2">
          <Button
            size="large"
            label="Continue"
            onClick={() => setShowModalExtraSmall(false)}
          />
          <Button
            style="text"
            size="large"
            label="Cancel"
            onClick={() => setShowModalExtraSmall(false)}
          />
        </Modal.Footer>
      </Modal>

      <Modal
        isOpen={showModalSmall}
        onClose={() => setShowModalSmall(false)}
        size="sm"
      >
        <Modal.Header>
          <Typography style="h2">Modal Title</Typography>
        </Modal.Header>
        <Modal.Body>
          <Typography style="large" lineHeight="normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus reprehenderit doloremque corporis.
          </Typography>
        </Modal.Body>
        <Modal.Footer className="space-x-2">
          <Button
            size="large"
            label="Continue"
            onClick={() => setShowModalSmall(false)}
          />
          <Button
            style="text"
            size="large"
            label="Cancel"
            onClick={() => setShowModalSmall(false)}
          />
        </Modal.Footer>
      </Modal>

      <Modal
        isOpen={showModalMedium}
        onClose={() => setShowModalMedium(false)}
        size="md"
      >
        <Modal.Header>
          <Typography style="h2">Modal Title</Typography>
        </Modal.Header>
        <Modal.Body>
          <Typography style="large" lineHeight="normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ex hic vitae natus nam dignissimos corrupti aspernatur dicta, voluptates aliquam debitis earum obcaecati veniam a incidunt magni amet minus impedit!
          </Typography>
        </Modal.Body>
        <Modal.Footer className="space-x-2">
          <Button
            size="large"
            label="Continue"
            onClick={() => setShowModalMedium(false)}
          />
          <Button
            style="text"
            size="large"
            label="Cancel"
            onClick={() => setShowModalMedium(false)}
          />
        </Modal.Footer>
      </Modal>
    </div>
  );
};