import React, { useState } from 'react';
import filesize from 'filesize';

import Upload from '../../components/Upload';
import FileList from '../../components/FileList';

import { Container, Content } from './styles';

const Main = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleProcessUpload = (file) => {

  };

  const handleUpload = (files) => {
    const uploadingFiles = files.map(file => ({
      file,
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }));

    setUploadedFiles([...uploadedFiles, ...uploadingFiles]);

    uploadingFiles.forEach(handleProcessUpload);
  };

  return (
    <Container>
      <Content>
        <Upload onUpload={handleUpload} />
        {!!uploadedFiles.length && <FileList files={uploadedFiles} />}
      </Content>
    </Container>
  );
};

export default Main;
