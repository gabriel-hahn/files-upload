import React, { useState, useEffect } from 'react';
import filesize from 'filesize';
import { uniqueId } from 'lodash';

import api from '../../services/api';
import Upload from '../../components/Upload';
import FileList from '../../components/FileList';

import { Container, Content } from './styles';

const Main = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadingFiles, setUploadingFiles] = useState([]);

  const handleLoadAllPosts = async () => {
    const response = await api.get('posts');

    setUploadedFiles(response.data.map(file => ({
      id: file._id,
      name: file.name,
      readableSize: filesize(file.size),
      preview: file.url,
      uploaded: true,
      url: file.url,
    })));
  }

  useEffect(() => {
    handleLoadAllPosts();

    return () => {
      uploadedFiles.forEach(file => URL.revokeObjectURL(file.preview));
    }
  }, []);

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
    }).then((response) => {
      const { _id, url } = response.data;

      updateFile(uploadedFile.id, {
        uploaded: true,
        id: _id,
        url,
      });
    }).catch(() => {
      updateFile(uploadedFile.id, {
        error: true,
      });
    });
  };

  useEffect(() => {
    uploadingFiles.forEach(handleProcessUpload);

    if (uploadingFiles.length > 0) {
      setUploadingFiles([]);
    }
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

    setUploadingFiles([...uploadingFiles, ...newFiles]);
    setUploadedFiles([...uploadedFiles, ...newFiles]);
  };

  const handleDelete = async (id) => {
    await api.delete(`posts/${id}`);

    setUploadedFiles(uploadedFiles.filter(file => file.id !== id));
  };

  return (
    <Container>
      <Content>
        <Upload onUpload={handleUpload} />
        {!!uploadedFiles.length && <FileList files={uploadedFiles} onDelete={handleDelete} />}
      </Content>
    </Container>
  );
};

export default Main;
