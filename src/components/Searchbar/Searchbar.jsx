import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
// import { ToastContainer, toast } from 'react-toastify';
class SearchBar extends Component {
  state = {
    searchQuery: '',
  };

  handleNameChanger = event => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      alert('Empty Input');
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  // onHandleSubmit = (values, { resetForm }) => {
  //   this.props.onSubmit(values.name, values.number);
  //   resetForm();
  // };

  render() {
    return (
      <>
        <header>
          <Formik>
            <form onSubmit={this.handleSubmit}>
              <button type="submit">
                <span>Search</span>
              </button>

              <input
                value={this.state.searchQuery}
                onChange={this.handleNameChanger}
                type="text"
                autoComplete="off"
                autoFocus
                name="searchQuery"
                placeholder="Search images and photos"
              />
            </form>
          </Formik>
        </header>
      </>
    );
  }
}

export default SearchBar;
