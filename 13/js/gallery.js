import {generateThumbnails} from './thumbnail.js';
import {showBigPicture} from './big-picture.js';

const container = document.querySelector('.pictures');

let pictures = [];

const onContainerClick = (evt) => {
  const thumbnail = evt.target.closest('[data-thumbnail-id]');
  if (!thumbnail) {
    return;
  }

  evt.preventDefault();
  const picture = pictures.find((item) => item.id === +thumbnail.dataset.thumbnailId);
  if (picture) {
    showBigPicture(picture);
  }
};

const renderGallery = (currentPictures) => {
  pictures = currentPictures;
  generateThumbnails(pictures, container);

  if (container) {
    container.addEventListener('click', onContainerClick);
  }
};

export {renderGallery};
