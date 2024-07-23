function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateUniqueId() {
  const usedIdNumbers = [];
  return function () {
    let randomId;

    do {
      randomId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1;
    } while (usedIdNumbers.includes(randomId));

    usedIdNumbers.push(randomId);
    return randomId;
  };
}

function getRandomString(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function generateUniqueNumbers() {
  const usedNumbers = [];
  return function (min, max) {
    let randomNumber;
    do {
      randomNumber = generateRandomNumber(min, max);
    } while (usedNumbers.includes(randomNumber));

    usedNumbers.push(randomNumber);

    return randomNumber;
  };
}

const isEscapeKey = (evt) => evt.key === 'Escape';

export {
  generateRandomNumber,
  generateUniqueId,
  getRandomString,
  generateUniqueNumbers,
  isEscapeKey
};
