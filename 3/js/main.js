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

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const usedIdNumbers = [];

function generateUniqueId() {
  let randomId;

  do {
    randomId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1;
  } while (usedIdNumbers.includes(randomId));

  usedIdNumbers.push(randomId);

  return randomId;
}

function generateRandomAvatarUrl() {
  const randomNumber = generateRandomNumber(1, 6);
  return `img/avatar-${randomNumber}.svg`;
}

function getRandomString(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function generateRandomComment() {
  return {
    id: generateUniqueId(),
    avatar: generateRandomAvatarUrl(),
    message: getRandomString(messages),
    name: getRandomString(names),
  };
}

function generateArrayOfComments() {
  const numberOfComments = generateRandomNumber(0, 30);
  const commentsArray = [];

  for (let i = 0; i < numberOfComments; i++) {
    commentsArray.push(generateRandomComment());
  }

  return commentsArray;
}

const usedPostIdNumbers = [];

function generateUniquePostId() {
  let randomPostId;

  do {
    randomPostId = generateRandomNumber(1, 25);
  } while (usedPostIdNumbers.includes(randomPostId));

  usedPostIdNumbers.push(randomPostId);

  return randomPostId;
}

const usedPostUrl = [];

function generateRandomPostUrl() {
  let randomPostUrl;

  do {
    randomPostUrl = generateRandomNumber(1, 25);
  } while (usedPostUrl.includes(randomPostUrl));

  usedPostUrl.push(randomPostUrl);

  return `photos/${randomPostUrl}.jpg`;
}

function generateRandomPost() {
  return {
    id: generateUniquePostId(),
    url: generateRandomPostUrl(),
    description: photoDescription,
    likes: generateRandomNumber(15, 200),
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

//Создание итогового массива ниже
// const randomPostArray = generatePostsArray(25);

generatePostsArray(25); // вызвал функцию чтобы линтер не ругался
