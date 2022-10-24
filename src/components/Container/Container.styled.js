import styled from 'styled-components';

export const ContainerStyled = styled.section`
  display: grid;
  grid-template-columns: ${p => p.theme.space.gridTemplateColumns};
  grid-gap: ${p => p.theme.space.gridGapGallery}px;
  padding-bottom: ${p => p.theme.space.paddingBottomContainer}px;
  margin-top: ${p => p.theme.space.marginTopContainer}px;
`;
