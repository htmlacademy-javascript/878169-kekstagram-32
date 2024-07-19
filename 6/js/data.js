import {
  generateRandomNumber,
  generateUniqueId,
  getRandomString,
  generateUniqueNumbers
} from './util.js';

const names = [
  'Денис',
  'Антонина',
  'Виктор',
  'Елизавета',
  'Степан',
  'Мария',
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const photoDescription = 'Описание фотографии';

const MIN_AVATAR_NUMBER = 1;

const MAX_AVATAR_NUMBER = 6;

const MIN_COMMENTS_QUANTITY = 0;

const MAX_COMMENTS_QUANTITY = 30;

const MIN_POST_ID_QUANTITY = 1;

const MAX_POST_ID_QUANTITY = 25;

const MIN_POST_URL_QUANTITY = 1;

const MAX_POST_URL_QUANTITY = 25;

const MIN_LIKES_QUANTITY = 15;

const MAX_LIKES_QUANTITY = 200;

const POSTS_QUANTITY = 25;

const uniqueCommentId = generateUniqueId();

function generateRandomAvatarUrl() {
  return function () {
    const randomNumber = generateRandomNumber(MIN_AVATAR_NUMBER, MAX_AVATAR_NUMBER);
    return `img/avatar-${randomNumber}.svg`;
  };
}

const randomAvatarUrl = generateRandomAvatarUrl();

function generateRandomComment() {
  return {
    id: uniqueCommentId(),
    avatar: randomAvatarUrl(),
    message: getRandomString(messages),
    name: getRandomString(names),
  };
}

function generateArrayOfComments() {
  const numberOfComments = generateRandomNumber(MIN_COMMENTS_QUANTITY, MAX_COMMENTS_QUANTITY);
  const commentsArray = [];

  for (let i = 0; i < numberOfComments; i++) {
    commentsArray.push(generateRandomComment());
  }

  return commentsArray;
}

const generateUniquePostId = generateUniqueNumbers();

const generateRandomPostUrl = generateUniqueNumbers();

function generateRandomPost() {
  return {
    id: generateUniquePostId(MIN_POST_ID_QUANTITY, MAX_POST_ID_QUANTITY),
    url: `photos/${generateRandomPostUrl(MIN_POST_URL_QUANTITY, MAX_POST_URL_QUANTITY)}.jpg`,
    description: photoDescription,
    likes: generateRandomNumber(MIN_LIKES_QUANTITY, MAX_LIKES_QUANTITY),
    comments: generateArrayOfComments(),
  };
}

function generatePostsArray(n) {
  const postsArray = [];

  for (let i = 0; i < n; i++) {
    postsArray.push(generateRandomPost());
  }

  return postsArray;
}

const generatedPosts = function() {
  return generatePostsArray(POSTS_QUANTITY);
};

export {generatedPosts};
