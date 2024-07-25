import {
  getRandomInteger,
  getRandomArrayElement,
  createIdGenerator,
} from './util.js';

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS = [
  'Первое описание.',
  'Второе описание!',
  'Третье описание?',
  'Четвертое описание...'
];

const NAMES = [
  'Иван',
  'Денис',
  'Алиса',
  'Вика',
  'Лера',
  'Стёпа',
];

const PICTURES_QUANTITY = 25;

const MIN_LIKES_QUANTITY = 15;

const MAX_LIKES_QUANTITY = 200;

const MIN_COMMENTS_QUANTITY = 0;

const MAX_COMMENTS_QUANTITY = 30;

const MIN_AVATAR_QUANTITY = 1;

const MAX_AVATAR_QUANTITY = 6;

const generateRandomId = createIdGenerator();

const createMessage = () => Array.from(
  {length: getRandomInteger(1, 2)},
  () => getRandomArrayElement(MESSAGES),
).join(' ');

const createComment = () => ({
  id: generateRandomId(),
  avatar: `img/avatar-${getRandomInteger(MIN_AVATAR_QUANTITY, MAX_AVATAR_QUANTITY)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKES_QUANTITY, MAX_LIKES_QUANTITY),
  comments: Array.from(
    {length: getRandomInteger(MIN_COMMENTS_QUANTITY, MAX_COMMENTS_QUANTITY)},
    createComment
  ),
});

const getPictures = () => Array.from(
  {length: PICTURES_QUANTITY},
  (_, index) => createPicture(index + 1)
);

export {
  getPictures,
};
