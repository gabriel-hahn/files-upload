import React, { useState, useEffect } from 'react';
import filesize from 'filesize';
import { uniqueId } from 'lodash';

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

  useEffect(() => {
    const filesToUpdateStatus = uploadedFiles.filter(file => !file.error && !file.uploaded && file.progress === 0);

    filesToUpdateStatus.forEach(handleProcessUpload);
  }, [uploadedFiles]);

  const handleUpload = (files) => {
    const newFiles = files.map(file => ({
      file,
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      id: uniqueId(),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }));

    setUploadedFiles([...uploadedFiles, ...newFiles]);
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
