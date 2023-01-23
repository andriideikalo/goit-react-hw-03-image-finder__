// import { PropTypes } from 'prop-react';
import React from 'react';

export const ImageGalleryItem = ({ image, onImageClick }) => (
  <li class="gallery-item">
    <img src={image.webformatURL} alt={image.tags} />
  </li>
);

// ImageGalleryItem.prototype = {
//   image: PropTypes.shape({
//     webformatURL: PropTypes.string.isRequired,
//     largeImageURL: PropTypes.string.isRequired,
//     tags: PropTypes.string.isRequired,
//   }),
// };

export default ImageGalleryItem;
