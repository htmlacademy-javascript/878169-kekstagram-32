const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomArrayElement = (arr) => arr[getRandomInteger(0, arr.length - 1)];

const createIdGenerator = () => {
  let numberId = 0;

  return () => {
    numberId += 1;
    return numberId;
  };
};

export {
  getRandomInteger,
  getRandomArrayElement,
  createIdGenerator,
};
