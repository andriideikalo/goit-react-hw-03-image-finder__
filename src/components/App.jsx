import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Modal from './Modal';
import Loader from './Loader';
import Button from './Button';
import api from '../API/API';

class App extends Component {
  state = {
    images: [],
    modalImage: null,
    query: '',
    page: 1,
    isModalOpen: false,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      api
        .getImages(this.state.query, this.state.page)
        .then(images =>
          this.setState(prev => ({ images: [...prev.images, ...images] }))
        )
        .catch(console.log)
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  onSearchSubmit = query => {
    if (query === this.state.query) return;

    this.setState({
      query: query,
      page: 1,
      images: [],
      isModalOpen: false,
      isLoading: true,
    });
  };

  onLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1, isLoading: true }));
  };

  onImageClick = largeImage =>
    this.setState({ isModalOpen: true, modalImage: largeImage });

  onCloseModal = () => this.setState({ isModalOpen: false });

  render = () => {
    const { isLoading, isModalOpen, images, modalImage } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSearchSubmit} />
        {images.length > 0 && (
          <ImageGallery images={images} onImageClick={this.onImageClick} />
        )}
        {isModalOpen && (
          <Modal image={modalImage} onCloseModal={this.onCloseModal} />
        )}
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && (
          <Button onClick={this.onLoadMore} />
        )}
      </>
    );
  };
}

export default App;
