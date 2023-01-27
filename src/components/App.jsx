import React, { Component } from 'react';
// import api from './API/API';
import { fetchImges } from './API/API';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    images: [],
    modalImage: null,
    query: '',
    page: 1,
    lastPage: 1,
    showModal: false,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, query, lastPage } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      fetchImges(query, page, lastPage)
        .then(images =>
          this.setState(prev => ({
            images: [...prev.images, ...images],
            // lastPage: Math.ceil(totalHits / 12),
          }))
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
      showModal: false,
      isLoading: true,
    });
  };

  onLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1, isLoading: true }));
  };
  toggleIsLoading = () => {
    this.setState(prevState => ({ isLoading: !prevState.isLoading }));
  };

  onImageClick = largeImage =>
    this.setState({ showModal: true, modalImage: largeImage });

  onCloseModal = () => this.setState({ showModal: false });

  render() {
    const { isLoading, showModal, images, modalImage } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSearchSubmit} />
        {images.length > 0 && (
          <ImageGallery images={images} onImageClick={this.onImageClick} />
        )}
        {showModal && (
          <Modal image={modalImage} onCloseModal={this.onCloseModal}></Modal>
        )}
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && (
          <Button onClick={this.onLoadMore} />
        )}
      </>
    );
  }

  // <div
  //   style={{
  //     height: '100vh',
  //     display: 'flex',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     fontSize: 40,
  //     color: '#010101',
  //   }}
  // >
  //   React template
  // </div>
}

export default App;
