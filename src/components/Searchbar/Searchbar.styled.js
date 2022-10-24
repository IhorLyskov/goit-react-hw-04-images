import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const HeaderStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${p => p.theme.fontSizes.fontSizeInput}px;
  min-height: ${p => p.theme.heights.heightHeader}px;
  padding: ${p => p.theme.space.paddingVerHeader}px
    ${p => p.theme.space.paddingGorHeader}px;
  color: ${p => p.theme.colors.colorText};
  background-color: ${p => p.theme.colors.colorAcent};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchFormStyled = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${p => p.theme.widthes.widthSearchForm}px;
  background-color: ${p => p.theme.colors.colorText};
  border-radius: ${p => p.theme.space.radiusSearchForm}px;
  overflow: hidden;
`;

export const SearchBtnStyled = styled.button`
  display: inline-block;
  min-width: ${p => p.theme.widthes.widthSearchBtn}px;
  height: ${p => p.theme.heights.heightSearchBtn}px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

export const SearchInputStyled = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: ${p => p.theme.fontSizes.fontSizeInput}px;
  border: none;
  outline: none;
  padding-left: ${p => p.theme.space.paddingGorInput}px;
  padding-right: ${p => p.theme.space.paddingGorInput}px;
  line-height: 1.3em;

  &::placeholder {
    font-size: ${p => p.theme.fontSizes.fontSizePlaceHolder}px;
  }
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  color: ${p => p.theme.colors.colorError};
  padding-right: ${p => p.theme.space.paddingRightInputError}px;
  padding-left: ${p => p.theme.space.paddingLeftInputError}px;
`;
