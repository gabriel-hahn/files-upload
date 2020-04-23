import styled, { css } from 'styled-components';

import { colors } from '../../styles/variables';

const dragActive = css`
  border-color: ${colors.mainGreen};
`;

const dragReject = css`
  border-color: ${colors.mainRed};
`;

export const DropContainer = styled.div.attrs({
  className: 'dropzone'
})`
  border: 1px dashed #ddd;
  border-radius: 4px;
  cursor: pointer;

  transition: height 0.2s ease;

  ${props => props.isDragActive && dragActive};
  ${props => props.isDragReject && dragReject};
`;

export const UploadMessage = styled.p`

`;
