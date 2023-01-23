// import { PropTypes } from 'prop-react';
import React from 'react';

export const ImageGalleryItem = ({ image, onImageClick }) => (
  <li className="ImageGalleryItem">
    <img
      src={image.webformatURL}
      alt={image.tags}
      className="ImageGalleryItem-image"
    />
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
