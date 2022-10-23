import React from 'react';

import { Formik } from 'formik';
import * as Yup from 'yup';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

import {
  HeaderStyled,
  SearchFormStyled,
  SearchBtnStyled,
  SearchInputStyled,
  ErrorMessageStyled,
} from './Searchbar.styled';

const schema = Yup.object().shape({
  input: Yup.string().required('Required!'),
});

function Searchbar({ onSearch }) {
  const handleSubmit = values => {
    const text = values.input;
    onSearch({ text });
  };

  return (
    <HeaderStyled>
      <Formik
        initialValues={{ input: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <SearchFormStyled>
          <SearchBtnStyled type="submit">
            <FaSearch size="1.25em" />
          </SearchBtnStyled>

          <SearchInputStyled
            type="text"
            name="input"
            autoComplete="off"
            placeholder="Search images and photos"
          />
          <ErrorMessageStyled name="input" component="div" />
        </SearchFormStyled>
      </Formik>
    </HeaderStyled>
  );
}

Searchbar.propTypes = {
  onSearch: PropTypes.func,
};

export default Searchbar;
