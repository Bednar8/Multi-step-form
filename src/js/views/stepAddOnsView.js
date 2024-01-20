import View from './View';

class StepAddOnsView extends View {
  addHandlerChooseAddOns(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const addOns = e.target.closest('.add-ons');
      if (!addOns) return;
      const input = addOns.querySelector('input');

      if (!addOns) return;

      addOns.classList.toggle('plan__item-active');
      if (addOns.classList.contains('plan__item-active')) input.checked = true;
      else input.checked = false;

      handler();
    });
  }

  getCurrentAddOns() {}

  _generateMarkup() {
    return `
    <div class="step__container--box" data-step="3">
        <h2 class="step--title">Pick add-ons</h2>
        <p class="step--description">Add-ons help enhance your gaming
          experience.</p>

        <div class="plan__add-ons">

          <div class="plan__item add-ons">
            <label class="add-ons--label" for="add-ons1">
              <input class="add-ons--checkbox" type="checkbox" name="add-ons1"
                id="add-ons1">
              <span class="add-ons--span"></span>
            </label>
            <div class="plan__item--description">
              <h3 class="plan__item--title">Online servica</h3>
              <p class="plan__item--price">Access to multiplayer games</p>
            </div>
            <p class="add-ons--price">+$${
              this._data.currentTime.name === 'monthly'
                ? `${this._data.allAddOns.onlineServica.monthly}/mo`
                : `${this._data.allAddOns.onlineServica.yearly}/yr`
            }</p>
          </div>

          <div class="plan__item add-ons">

            <label class="add-ons--label" for="add-ons2">
              <input class="add-ons--checkbox" type="checkbox" name="add-ons2"
                id="add-ons2">
              <span class="add-ons--span"></span>
            </label>
            <div class="plan__item--description">
              <h3 class="plan__item--title">Larger storage</h3>
              <p class="plan__item--price">Extra 1TB of cloud save</p>
            </div>
            <p class="add-ons--price">+$${
              this._data.currentTime.name === 'monthly'
                ? `${this._data.allAddOns.largerStorage.monthly}/mo`
                : `${this._data.allAddOns.largerStorage.yearly}/yr`
            }</p>

          </div>

          <div class="plan__item add-ons">
            <label class="add-ons--label" for="add-ons3">
              <input class="add-ons--checkbox" type="checkbox" name="add-ons3"
                id="add-ons3">
              <span class="add-ons--span"></span>
            </label>

            <div class="plan__item--description">
              <h3 class="plan__item--title">Customizable profile</h3>
              <p class="plan__item--price">Custom theme on your profile</p>
            </div>
            <p class="add-ons--price">+$${
              this._data.currentTime.name === 'monthly'
                ? `${this._data.allAddOns.customizableProfile.monthly}/mo`
                : `${this._data.allAddOns.customizableProfile.yearly}/yr`
            }</p>
          </div>
        </div>

        <div class="btns__container btns__container--desktop">
          <button class="btn-steps btn--back ">Go Back</button>
          <button class="btn-steps btn--next">Next Step</button>
        </div>
      </div>
    `;
  }
}

export default new StepAddOnsView();
