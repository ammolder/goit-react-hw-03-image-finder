import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImage = async (query, page) => {
  const r = await axios.get(
    `?q=${query}&page=1&key=29850422-ad4dd9a6485518a1ab30cd6c1&image_type=photo&orientation=horizontal&page=${page}&per_page=12`
  );
  return r.data.hits;
};
