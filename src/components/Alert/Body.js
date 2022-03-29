import React from "react";

import { Button, Typography } from "clearsense-ui/components";

const Body = ({
  title,
  message,
  submitButtonLabel,
  cancelButtonLabel,
  onSubmit,
  onClose,
  isSubmitting,
}) => (
  <>
    <div className="cs-ui-modal__header" data-cy="alert-title">
      {title && <Typography style="h2">{title}</Typography>}
    </div>
    <div className="cs-ui-modal__body" data-cy="alert-message">
      <Typography style="condensedMedium">{message}</Typography>
    </div>
    <div className="space-x-2 cs-ui-alert__footer">
      <Button
        style="danger"
        size="large"
        label={submitButtonLabel}
        onClick={onSubmit}
        loading={isSubmitting}
      />
      <Button
        style="text"
        size="large"
        label={cancelButtonLabel}
        onClick={onClose}
      />
    </div>
  </>
);

export default Body;
