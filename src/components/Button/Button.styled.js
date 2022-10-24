import styled from 'styled-components';

const ButtonStyled = styled.button`
  padding: ${p => p.theme.space.paddingVerButton}px
    ${p => p.theme.space.paddingGorButton}px;
  border-radius: ${p => p.theme.space.radiusButton}px;
  background-color: ${p => p.theme.colors.colorAcent};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: 'inline-block';
  color: ${p => p.theme.colors.colorText};
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.fontSizePlaceHolder}px;
  line-height: ${p => p.theme.heights.lineHeight}px;
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  min-width: ${p => p.theme.widthes.minWidthButton}px;
  max-width: ${p => p.theme.widthes.maxWidthButton}px;
  margin: 0 auto;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.colorKeyHover};
  }
`;

export default ButtonStyled;
