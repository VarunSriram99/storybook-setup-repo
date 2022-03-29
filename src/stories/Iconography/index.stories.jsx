import React from "react";

import * as icons from "../../icons";

import Toastr from "../../components/Toastr";
import { ToastContainer } from "react-toastify";

const copyIcon = (icon) => {
  navigator.clipboard.writeText(`import {${icon}} from \'icons\';`);
  Toastr.success(`Copied the icon '${icon}' to clipboard.`);
};

export default {
  title: "Iconography/Icons",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { IconName } from "icons";`<br/> Click on the icons to copy their import statement.<br/><br/>You can pass `color` and `size` props to the icons.<br/>Eg: `<Close color="#FFFFFF" size={15} />`',
      },
    },
  },
};

export const AllIcons = () => (
  <>
    <ToastContainer />
    <div className="grid grid-cols-5 gap-4">
      {icons.iconList.map((icon, index) => {
        const Component = icons[icon];
        return (
          <div
            className="flex flex-col items-center gap-2 hover:bg-gray-100 cursor-pointer p-4 rounded-md transition duration-300"
            key={index}
            onClick={() => copyIcon(icon)}
          >
            <div className="w-10 h-10 rounded-md flex justify-center items-center ">
              <Component color="black" />
            </div>
            <div>{icon}</div>
          </div>
        );
      })}
    </div>
  </>
);
