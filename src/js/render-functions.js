export default function createGalleryCards(images) {
  return images
    .map(image => {
      const {
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = image;
      return `
    <div class="card">
  <a class='card_link' href='${largeImageURL}'><img src="${webformatURL}" alt="${tags}" loading="lazy" /></a>
  <div class="info">
    <p class="info_item">
      <b>Likes</b>
      <b>${likes}</b>
    </p>
    <p class="info_item">
      <b>Views</b>
      <b>${views}</b>
    </p>
    <p class="info_item">
      <b>Comments</b>
      <b>${comments}</b>
    </p>
    <p class="info_item">
      <b>Downloads</b>
      <b>${downloads}</b>
    </p>
  </div>
</div>`;
    })
    .join('');
}
