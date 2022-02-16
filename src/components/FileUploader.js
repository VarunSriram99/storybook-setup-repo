import React, { useCallback, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { useDropzone } from "react-dropzone";
import { Plus } from "../icons";
import DropDown from "./DropDown";
import Typography from "./Typography";
import PropTypes from "prop-types";
import classnames from "classnames";

const FileUploader = ({ className, onUploadFinish, setIsButtonLoading }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [files, setFiles] = useState();

  const onDrop = useCallback(async acceptedFiles => {
    setIsUploading(true);
    setIsButtonLoading(true);
    const dataUrlFiles = await Promise.all(
      acceptedFiles.map(file => fileToDataUrl(file))
    );
    setIsUploading(false);
    setIsButtonLoading(false);
    setFiles(dataUrlFiles);
    onUploadFinish(dataUrlFiles);
  }, []);

  const fileToDataUrl = blob => {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve({ path: blob.path, data: reader.result });
      };

      reader.readAsDataURL(blob);
    });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      className={classnames("cs-ui-file-uploader", className, {
        "cs-ui-file-uploader__file--drag_enter": isDragActive,
      })}
      {...getRootProps({ onClick: evt => evt.stopPropagation() })}
    >
      <AnimatePresence>
        <div className="cs-ui-file-uploader__content">
          {isUploading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Uploading
            </motion.div>
          )}
          {files && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ul>
                {files.map(file => {
                  const paths = file.path.split("/");
                  const fileName = paths[paths.length - 1];
                  return <li>{fileName}</li>;
                })}
              </ul>
            </motion.div>
          )}
          {!isUploading && !files && <UploadFile />}
        </div>
        <input
          type="file"
          id="file"
          className="cs-ui-file-uploader__file"
          {...getInputProps()}
        />
      </AnimatePresence>
    </div>
  );
};

const UploadFile = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <label htmlFor="file">
      <DropDown
        label="Choose your file"
        buttonStyle="secondary"
        icon={Plus}
        primaryButtonClass="pointer-events-none"
      >
        <li>Option 1</li>
        <li>Option 2</li>
      </DropDown>
    </label>
    <Typography style="h6" type="semibold" className="mt-4">
      or drop here!
    </Typography>
  </motion.div>
);

FileUploader.propTypes = {
  className: PropTypes.string,
  onUploadFinish: PropTypes.func,
  setIsButtonLoading: PropTypes.func,
};

export default FileUploader;
