const searchList = document.querySelector('.search-list');

export default function searchImages(search) {
  const searchParams = new URLSearchParams({
    key: '38293986-7ee0e252210be96ee05c3f9f8',
    q: search,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 9,
    page: 1,
  });

  return fetch(`https://pixabay.com/api/?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      throw error;
    });
}
