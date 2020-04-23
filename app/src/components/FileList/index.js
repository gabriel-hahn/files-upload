import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

import { colors } from '../../styles/variables';
import { Container, FileInfo, Preview } from './styles';

const FileList = () => (
  <Container>
    <li>
      <FileInfo>
        <Preview src="http://localhost:3333/files/c0c1385c8221501d034695c56bfef457-313696.jpg" />
        <div>
          <strong>profile.png</strong>
          <span>64kb <button onClick={() => {}}>Delete</button></span>
        </div>
      </FileInfo>

      <div>
        <CircularProgressbar
          styles={{
            root: { width: 24 },
            path: { stroke: colors.mainGreen },
          }}
          strokeWidth={10}
          percentage={60}
        />

        <a
          href="http://localhost:3333/files/c0c1385c8221501d034695c56bfef457-313696.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
        </a>

        <MdCheckCircle size={24} color={colors.mainGreen} />
        <MdError size={24} color={colors.mainRed} />
      </div>
    </li>
  </Container>
);

export default FileList;
