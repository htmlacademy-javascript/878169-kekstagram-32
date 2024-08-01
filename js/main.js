import {renderGallery} from './gallery.js';
import {getData, sendData} from './api.js';
import {showAlert, debounce} from './util.js';
import {setOnFormSubmit, hideModal} from './form.js';
import {showSuccessMessage, showErrorMessage} from './message.js';
import {init as initFilter, getFilteredPictures} from './filter.js';

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    hideModal();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  }
});

try {
  const data = await getData();
  const debounceRenderGallery = debounce(renderGallery);
  initFilter(data, debounceRenderGallery);
  renderGallery(getFilteredPictures());
} catch {
  showAlert();
}
