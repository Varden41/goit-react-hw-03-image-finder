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
  // handleNameChanger = event => {
  //   this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  // };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.searchQuery.trim() === '') {
  //     alert('Empty Input');
  //     return;
  //   }
  //   this.props.onSubmit(this.state.searchQuery);
  //   this.setState({ searchQuery: '' });
  // };

  // onHandleSubmit = (values, { resetForm }) => {
  //   this.props.onSubmit(values.name, values.number);
  //   resetForm();
  // };
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
