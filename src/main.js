import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import searchImages from './js/pixabay-api';
import createGalleryCards from './js/render-functions';

const searchList = document.querySelector('.search-list');
const fetchSearchBtn = document.querySelector('.btn');
const inputSearch = document.querySelector('.search-input');
const loader = document.querySelector('.loader');
const loadMoreButton = document.querySelector('.load-more-btn');

let search = '';
let lightbox;
let limit = 15;
let page = 1;

inputSearch.addEventListener('input', event => {
  search = inputSearch.value.trim();
});

fetchSearchBtn.addEventListener('click', async event => {
  event.preventDefault();
  hideLoadMoreBtn();
  searchList.innerHTML = '';
  page = 1;

  if (!search) {
    hideLoader();
    iziToast.error({
      title: 'Error',
      message: 'Please fill out search field',
    });
    return;
  }
  await loadImages();
});

loadMoreButton.addEventListener('click', async event => {
  event.preventDefault();

  const cardHeight = document
    .querySelector('.card')
    .getBoundingClientRect().height;
  const scrollHeight =
    cardHeight * 2 + parseFloat(getComputedStyle(searchList).rowGap) + 120;

  await loadImages();
  scrollDown(scrollHeight);
});

async function loadImages() {
  try {
    hideLoadMoreBtn();
    showLoader();

    const posts = await searchImages(search, page, limit);

    if (!posts.hits.length) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      hideLoadMoreBtn();
      searchList.innerHTML = '';
      hideLoader();
      return;
    }

    const totalPages = Math.ceil(posts.total / limit);

    const galleryMarkup = createGalleryCards(posts.hits);
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

    if (page >= totalPages) {
      hideLoadMoreBtn();
      iziToast.warning({
        title: 'Warning',
        message: `We're sorry, but you've reached the end of search results.`,
      });
    } else {
      showLoadMoreBtn();
    }

    page += 1;
    hideLoader();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `An error occurred while loading images: ${error.message}`,
    });
    console.error('Error in loadImages:', error);
    hideLoadMoreBtn();
    searchList.innerHTML = '';
    hideLoader();
  }
}

function scrollDown(height) {
  window.scrollBy({
    top: height,
    behavior: 'smooth',
  });
}

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}

function showLoadMoreBtn() {
  loadMoreButton.style.display = 'block';
}

function hideLoadMoreBtn() {
  loadMoreButton.style.display = 'none';
}
