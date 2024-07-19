const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

const generateThumbnail = (post) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = post.url;
  thumbnail.querySelector('.picture__img').alt = post.description;
  thumbnail.querySelector('.picture__likes').textContent = post.likes;
  thumbnail.querySelector('.picture__comments').textContent = post.comments.length;

  return thumbnail;
};

const generateThumbnails = (posts) => {
  const fragment = document.createDocumentFragment();

  posts.forEach((post) => {
    const thumbnail = generateThumbnail(post);
    fragment.append(thumbnail);
  });

  container.append(fragment);
};

export {generateThumbnails};
