import styled from 'styled-components';

export const OverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 12;
`;

export const ModalStyled = styled.div`
  max-width: ${p => p.theme.widthes.widthModal};
  max-height: ${p => p.theme.heights.heightModal};
`;
