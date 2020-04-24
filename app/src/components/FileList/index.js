import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

import { colors } from '../../styles/variables';
import { Container, FileInfo, Preview } from './styles';

const FileList = ({ files }) => (
  <Container>
    { files.map((uploadedFile, index) => (
      <li key={index}>
        <FileInfo>
          <Preview src={uploadedFile.preview} />
          <div>
            <strong>{uploadedFile.name}</strong>
            <span>
              {uploadedFile.readableSize}{' '}
              {!!uploadedFile.url && <button onClick={() => {}}>Delete</button>}
            </span>
          </div>
        </FileInfo>

        <div>
          {!uploadedFile.uploaded && !uploadedFile.error && (
            <CircularProgressbar
              styles={{
                root: { width: 24 },
                path: { stroke: colors.mainGreen },
              }}
              strokeWidth={10}
              percentage={uploadedFile.progress}
            />
          )}

          {uploadedFile.url && (
            <a
              href={uploadedFile.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
            </a>
          )}

          {uploadedFile.uploaded && <MdCheckCircle size={24} color={colors.mainGreen} />}
          {uploadedFile.error && <MdError size={24} color={colors.mainRed} />}
        </div>
      </li>
    )) }
  </Container>
);

export default FileList;
