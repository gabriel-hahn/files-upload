import React from 'react';

import Upload from '../../components/Upload';
import FileList from '../../components/FileList';

import { Container, Content } from './styles';

const Main = () => {
  return (
    <Container>
      <Content>
        <Upload />
        <FileList />
      </Content>
    </Container>
  );
};

export default Main;
