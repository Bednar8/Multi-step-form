export default class View {
  _parentEl = document.querySelector('.container');
  _stepContainer = document.querySelector('.step__container');
  _data;

  // Add handler on click to next step
  addHandlerClickNextStep(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btnNext = document.querySelector('.btn--next');
      if (e.target !== btnNext) return;
      handler();
    });
  }
  addHandlerClickBackStep(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btnNext = document.querySelector('.btn--back');
      if (e.target !== btnNext) return;
      handler();
    });
  }

  // Render markup current step
  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._stepContainer.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._stepContainer.innerHTML = '';
  }

  controlButtons = function (currentStep, stepInfo) {
    const btnBack = document.querySelector('.btn--back');
    const btnsContainer = document.querySelector('.btns__container');
    if (!btnsContainer) return;
    if (currentStep === stepInfo) {
      btnsContainer.style.justifyContent = 'flex-end';
      if (btnBack) btnBack.style.display = 'none';
    } else {
      btnsContainer.style.justifyContent = 'space-between';
    }
  };
}

export const view = new View();
