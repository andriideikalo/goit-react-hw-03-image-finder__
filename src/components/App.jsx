import React, { Component } from 'react';
// import api from './API/API';
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
    showModal: false,
    isLoading: false,
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (
  //     prevState.query !== this.state.query ||
  //     prevState.page !== this.state.page
  //   ) {
  //     api
  //       .getImages(this.state.query, this.state.page)
  //       .then(images =>
  //         this.setState(prev => ({ images: [...prev.images, ...images] }))
  //       )
  //       .catch(console.log)
  //       .finally(() => this.setState({ isLoading: false }));
  //   }
  // }

  // onSearchSubmit = query => {
  //   if (query === this.state.query) return;

  //   this.setState({
  //     query: query,
  //     page: 1,
  //     images: [],
  //     showModal: false,
  //     isLoading: true,
  //   });
  };

  onLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1, isLoading: true }));
  };

  onImageClick = largeImage =>
    this.setState({ showModal: true, modalImage: largeImage });

  onCloseModal = () => this.setState({ showModal: false });

  // render = () => {
  //   const { isLoading, showModal, images, modalImage } = this.state;
  //   return (
  //     <>
  //       <Searchbar onSubmit={this.onSearchSubmit} />
  //       {images.length > 0 && (
  //         <ImageGallery images={images} onImageClick={this.onImageClick} />
  //       )}
  //       {showModal && (
  //         <Modal image={modalImage} onCloseModal={this.onCloseModal} />
  //       )}
  //       {isLoading && <Loader />}
  //       {images.length > 0 && !isLoading && (
  //         <Button onClick={this.onLoadMore} />
  //       )}
  //     </>
  //   );
  // };

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
