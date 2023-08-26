import axios from 'axios';

// const API_KEY = '36106803-d64240cda904fbe2d47e1c8e1';
// axios.defaults.baseURL = `https://pixabay.com/api`;

// async function getImages(searchQuery, page) {
//   const response = await axios.get(
//     `/key=${API_KEY}&q=${searchQuery}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
//   );
//   return response.data;
// }

// export { getImages };

const API_KEY = '36106803-d64240cda904fbe2d47e1c8e1';
axios.defaults.baseURL = `https://pixabay.com/api`;

async function getImages() {
  const response = await axios.get(
    `/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response;
}

export { getImages };
