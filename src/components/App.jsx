import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import pixabayFetch, { resetPage } from '../Services/Pixabay';

class App extends Component {
  state = {
    photos: [],
    searchQuery: '',
    status: 'idle',
    showModal: 'false',
    clickedImage: {},
  };

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.status === 'pending') {
      const data = await pixabayFetch(this.state.searchQuery).then(
        this.setState({ status: 'loading' })
      );
    }
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      ></div>
    );
  }
}

export default App;
