const Effect = {
  DEFAULT: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
};

const effectToFilter = {
  [Effect.CHROME]: { style: 'grayscale', unit: '' },
  [Effect.SEPIA]: { style: 'sepia', unit: '' },
  [Effect.MARVIN]: { style: 'invert', unit: '%' },
  [Effect.PHOBOS]: { style: 'blur', unit: 'px' },
  [Effect.HEAT]: { style: 'brightness', unit: '' },
};

const effectToSliderOptions = {
  [Effect.DEFAULT]: { min: 0, max: 100, step: 1 },
  [Effect.CHROME]: { min: 0, max: 1, step: 0.1 },
  [Effect.SEPIA]: { min: 0, max: 1, step: 0.1 },
  [Effect.MARVIN]: { min: 0, max: 100, step: 1 },
  [Effect.PHOBOS]: { min: 0, max: 3, step: 0.1 },
  [Effect.HEAT]: { min: 1, max: 3, step: 0.1 },
};

const modalElement = document.querySelector('.img-upload');
const imageElement = modalElement.querySelector('.img-upload__preview img');
const effectsElement = modalElement.querySelector('.effects');
const sliderElement = modalElement.querySelector('.effect-level__slider');
const sliderContainerElement = modalElement.querySelector('.img-upload__effect-level');
const effectLevelElement = modalElement.querySelector('.effect-level__value');

let chosenEffect = Effect.DEFAULT;

const isDefault = () => chosenEffect === Effect.DEFAULT;

const setImageStyle = () => {
  imageElement.style.filter = isDefault() ? '' : `${effectToFilter[chosenEffect].style}(${effectLevelElement.value}${effectToFilter[chosenEffect].unit})`;
};

const toggleSliderVisibility = (isVisible) => {
  sliderContainerElement.classList.toggle('hidden', !isVisible);
};

const onSliderUpdate = () => {
  effectLevelElement.value = sliderElement.noUiSlider.get();
  setImageStyle();
};

const createSlider = ({ min, max, step }) => {
  noUiSlider.create(sliderElement, {
    range: { min, max },
    step,
    start: max,
    connect: 'lower',
    format: {
      to: (value) => Number(value),
      from: (value) => Number(value),
    },
  });
  sliderElement.noUiSlider.on('update', onSliderUpdate);
  toggleSliderVisibility(false);
};

const updateSlider = ({ min, max, step }) => {
  sliderElement.noUiSlider.updateOptions({
    range: { min, max },
    step,
    start: max,
  });
};

const setSlider = () => {
  if (isDefault()) {
    toggleSliderVisibility(false);
  } else {
    updateSlider(effectToSliderOptions[chosenEffect]);
    toggleSliderVisibility(true);
  }
};

const setEffect = (effect) => {
  chosenEffect = effect;
  setSlider();
  setImageStyle();
};

const reset = () => {
  setEffect(Effect.DEFAULT);
};

const onEffectsChange = (evt) => {
  setEffect(evt.target.value);
};

const init = () => {
  createSlider(effectToSliderOptions[chosenEffect]);
  effectsElement.addEventListener('change', onEffectsChange);
};

export { init, reset };
