import React from "react";

import Toastr from "../components/Toastr";
import Button from "../components/Button";

import { ToastContainer } from "react-toastify";

export default {
  title: "Components/Toastr",
  component: Toastr,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          '`import { Toastr } from "clearsense-ui/components";`<br/><br/>Add the following before using the Toastr. <br/>Add `@import "react-toastify/dist/ReactToastify.min.css";` to the root css file<br/> Add `import { ToastContainer } from "react-toastify";` to the root react file.',
      },
    },
  },
};

export const SuccessToastr = () => (
  <>
    <ToastContainer />
    <Button
      label="Success"
      onClick={() => Toastr.success("This is a success message")}
    />
  </>
);

export const ErrorToastr = () => (
  <>
    <ToastContainer />
    <Button
      label="Error"
      onClick={() => Toastr.error("This is an error message")}
    />
  </>
);

export const WarningToastr = () => (
  <>
    <ToastContainer />
    <Button
      label="Warning"
      onClick={() => Toastr.warning("This is a warning message")}
    />
  </>
);

export const InfoToastr = () => (
  <>
    <ToastContainer />
    <Button
      label="Info"
      onClick={() => Toastr.info("This is an info message")}
    />
  </>
);
