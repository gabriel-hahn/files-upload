import React from 'react';
import Dropzone from 'react-dropzone';

import { DropContainer, UploadMessage } from './styles';

const Upload = () => {
  const renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <UploadMessage>Drag your images here</UploadMessage>
    }

    if (isDragReject) {
      return <UploadMessage type="error">Unsupported file</UploadMessage>
    }

    return <UploadMessage type="success">Drop your images here</UploadMessage>
  };

  return (
    <Dropzone accept="image/*" onDropAccepted={() => {}}>
      { ({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <DropContainer
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}
        >
          <input {...getInputProps()} />

          {renderDragMessage(isDragActive, isDragReject)}
        </DropContainer>
      ) }
    </Dropzone>
  )
};

export default Upload;
