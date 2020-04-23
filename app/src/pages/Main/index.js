import React, { useState } from 'react';
import filesize from 'filesize';

import api from '../../services/api';
import Upload from '../../components/Upload';
import FileList from '../../components/FileList';

import { Container, Content } from './styles';

const Main = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const updateFile = (id, data) => {
    setUploadedFiles(uploadedFiles.map((uploadedFile) => (
      id === uploadedFile.id ? {...uploadedFile, ...data} : uploadedFile)));
  };

  const handleProcessUpload = (uploadedFile) => {
    const data = new FormData();

    data.append('file', uploadedFile.file, uploadedFile.name);

    api.post('/posts', data, {
      onUploadProgress: e => {
        const progress = parseInt(Math.round((e.loaded * 100) / e.total));

        updateFile(uploadedFile.id, {
          progress,
        });
      }
    });
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
