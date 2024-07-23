import {isEscapeKey} from './util.js';

const openedPost = document.querySelector('.big-picture');
const container = document.querySelector('.pictures');
const closedPost = document.querySelector('.big-picture__cancel');

container.addEventListener('click', (evt) => {
  const pictureElement = evt.target.closest('.picture');

  if (pictureElement) {
    evt.preventDefault();
    openedPost.classList.remove('hidden');
  }
});

closedPost.addEventListener('click', () => {
  openedPost.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    openedPost.classList.add('hidden');
  }
});
