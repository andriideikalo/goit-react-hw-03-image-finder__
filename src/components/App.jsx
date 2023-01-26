// import { Component } from 'react';
// import api from './API/API';
// import Searchbar from './Searchbar/Searchbar';
// import ImageGallery from './ImageGallery/ImageGallery';
// import Loader from './Loader/Loader';
// import Button from './Button/Button';
// import Modal from './Modal/Modal';

// class App extends Component {
//   state = {
//     images: [],
//     modalImage: null,
//     query: '',
//     page: 1,
//     showModal: false,
//     isLoading: false,
//   };

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

// export const App = () => {
// return (
//   <div
//     style={{
//       height: '100vh',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       fontSize: 40,
//       color: '#010101',
//     }}
//   >
//     React template
//   </div>
// );
// }
