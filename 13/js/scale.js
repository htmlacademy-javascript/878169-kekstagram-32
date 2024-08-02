const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const modalElement = document.querySelector('.img-upload');
const smallerButtonElement = modalElement.querySelector('.scale__control--smaller');
const biggerButtonElement = modalElement.querySelector('.scale__control--bigger');
const scaleInputElement = modalElement.querySelector('.scale__control--value');
const imageElement = modalElement.querySelector('.img-upload__preview img');

const scaleImage = (value) => {
  imageElement.style.transform = `scale(${value / 100})`; // Исправили синтаксис шаблонной строки
  scaleInputElement.value = `${value}%`; // Исправили синтаксис шаблонной строки
};

const updateScale = (newScale) => {
  scaleImage(newScale);
};

const onSmallerButtonClick = () => {
  const currentScale = parseInt(scaleInputElement.value, 10);
  const newScale = Math.max(currentScale - SCALE_STEP, MIN_SCALE);
  updateScale(newScale);
};

const onBiggerButtonClick = () => {
  const currentScale = parseInt(scaleInputElement.value, 10);
  const newScale = Math.min(currentScale + SCALE_STEP, MAX_SCALE);
  updateScale(newScale);
};

const resetScale = () => updateScale(DEFAULT_SCALE);

smallerButtonElement.addEventListener('click', onSmallerButtonClick);
biggerButtonElement.addEventListener('click', onBiggerButtonClick);

export { resetScale };
