import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {
  Searchbar,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
  BtnIcon,
} from './Searchbar.styled';

class SearchBar extends Component {
  handleSubmit = (values, { resetForm }) => {
    const { onSubmit } = this.props;
    onSubmit(values.search);
    resetForm();
  };

  render() {
    return (
      <>
        <Searchbar>
          <Formik initialValues={{ search: '' }} onSubmit={this.handleSubmit}>
            <SearchForm>
              <SearchFormBtn type="submit">
                <BtnIcon />
                <SearchFormBtnLabel>Search</SearchFormBtnLabel>
              </SearchFormBtn>
              <SearchFormInput
                type="text"
                name="search"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
              />
            </SearchForm>
          </Formik>
        </Searchbar>
      </>
    );
  }
}

SearchBar.propTypes = { onSubmit: PropTypes.func.isRequired };

export default SearchBar;
