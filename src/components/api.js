import axios from 'axios';
const PER_PAGE = 12;

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '40079787-b3d89c7f5fe0e834039516469';

export const fetchImages = async (query, page) => {
  const response = await axios.get(
    `?key=${KEY}&q=${query}&page=${page}&per_page=${PER_PAGE}&orientation=horizontal&image_type=photo`
  );
  return response.data;
};
