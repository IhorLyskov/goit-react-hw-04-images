import styled from 'styled-components';

const ImageGalleryStyled = styled.ul`
  display: grid;
  max-width: ${p => p.theme.widthes.widthModal};
  grid-template-columns: repeat(
    auto-fill,
    ${p => p.theme.widthes.widthGalleryColumn}
  );
  grid-gap: ${p => p.theme.space.gridGapGallery}px;
  list-style: none;
  margin: 0 auto;
  padding: 0;
`;

export default ImageGalleryStyled;
