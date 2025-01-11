import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import searchImages from './js/pixabay-api';
import createGalleryCards from './js/render-functions';

const searchList = document.querySelector('.search-list');
const fetchSearchBtn = document.querySelector('.btn');
const inputSearch = document.querySelector('.search-input');

let search = '';
let lightbox;

function showLoader() {
  const loader = document.querySelector('.loader');
  loader.style.display = 'block';
}

function hideLoader() {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
}

inputSearch.addEventListener('input', event => {
  search = event.currentTarget.value;
});

fetchSearchBtn.addEventListener('click', event => {
  event.preventDefault();

  if (!search) {
    iziToast.error({
      title: 'Error',
      message: 'Please fill out search field',
    });
    return;
  }

  searchList.innerHTML = '';

  showLoader();

  searchImages(search)
    .then(images => {
      if (images.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        searchList.innerHTML = '';
        return;
      }

      const galleryMarkup = createGalleryCards(images.hits);
      searchList.insertAdjacentHTML('beforeend', galleryMarkup);

      if (!lightbox) {
        lightbox = new SimpleLightbox('.search-list a', {
          captions: true,
          captionsData: 'alt',
          captionDelay: 250,
        });
      } else {
        lightbox.refresh();
      }
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images',
      });
      console.error('Error fetching images:', error);
    })
    .finally(() => {
      hideLoader();
    });
});
