import axios from 'axios';

export default async function searchImages(search, page, limit) {
  const searchParams = new URLSearchParams({
    key: '38293986-7ee0e252210be96ee05c3f9f8',
    q: search,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    limit: limit,
    page: page,
    per_page: limit,
  });

  const response = await axios.get(`https://pixabay.com/api/?${searchParams}`);
  return response.data;
}
