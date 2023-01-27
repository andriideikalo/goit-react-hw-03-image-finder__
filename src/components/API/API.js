import axios from 'axios';

const API_KEY = '31949883-7c5fe764cd95888a750d50db1';
const BASE_URL = 'https://pixabay.com/api/';

export const getImages = (query, page) => {
  return axios
    .get(
      `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12
`
    )
    .then(res =>
      res.data.hits.map(({ id, webformatURL, largeImageURL }) => ({
        id,
        webformatURL,
        largeImageURL,
      }))
    );
};

export default { getImages };
