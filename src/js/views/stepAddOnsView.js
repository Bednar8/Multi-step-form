import View from './View';

class StepAddOnsView extends View {
  addHandlerChooseAddOns(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const addOns = e.target.closest('.add-ons');
      if (!addOns) return;
      const input = addOns.querySelector('input');

      addOns.classList.toggle('plan__item-active');
      if (addOns.classList.contains('plan__item-active')) input.checked = true;
      else input.checked = false;

      handler();
    });
  }

  getCurrentAddOns() {
    const activeAddOnsElements = Array.from(
      document.querySelectorAll('.plan__item-active')
    );

    const nameAddOns = activeAddOnsElements.map(addOns => addOns.dataset.name);
    return nameAddOns;
  }

  _generateMarkup() {
    return `
    <div class="step__container--box" data-step="3">
        <h2 class="step--title">Pick add-ons</h2>
        <p class="step--description">Add-ons help enhance your gaming
          experience.</p>

        <div class="plan__add-ons">

          <div class="plan__item add-ons ${this._checkActiveAddOns(
            'onlineServica',
            'plan__item-active'
          )}"  data-name="onlineServica">
            <label class="add-ons--label" for="add-ons1">
              <input class="add-ons--checkbox" type="checkbox" name="add-ons1"
                id="onlineServica" ${this._checkActiveAddOns(
                  'onlineServica',
                  'checked'
                )}>
              <span class="add-ons--span"></span>
            </label>
            <div class="plan__item--description">
              <h3 class="plan__item--title">Online servica</h3>
              <p class="plan__item--price">Access to multiplayer games</p>
            </div>
            <p class="add-ons--price">+$${
              this._data.currentTime.name === 'Monthly'
                ? `${this._data.allAddOns.onlineServica.monthly}/mo`
                : `${this._data.allAddOns.onlineServica.yearly}/yr`
            }</p>
          </div>

          <div class="plan__item add-ons ${this._checkActiveAddOns(
            'largerStorage',
            'plan__item-active'
          )}"  data-name="largerStorage">

            <label class="add-ons--label" for="add-ons2">
              <input class="add-ons--checkbox" type="checkbox" name="add-ons2"
                id="largerStorage" ${this._checkActiveAddOns(
                  'largerStorage',
                  'checked'
                )}>
              <span class="add-ons--span"></span>
            </label>
            <div class="plan__item--description">
              <h3 class="plan__item--title">Larger storage</h3>
              <p class="plan__item--price">Extra 1TB of cloud save</p>
            </div>
            <p class="add-ons--price">+$${
              this._data.currentTime.name === 'Monthly'
                ? `${this._data.allAddOns.largerStorage.monthly}/mo`
                : `${this._data.allAddOns.largerStorage.yearly}/yr`
            }</p>

          </div>

          <div class="plan__item add-ons ${this._checkActiveAddOns(
            'customizableProfile',
            'plan__item-active'
          )}"  data-name="customizableProfile">
            <label class="add-ons--label" for="add-ons3">
              <input class="add-ons--checkbox" type="checkbox" name="add-ons3"
                id="customizableProfile" ${this._checkActiveAddOns(
                  'customizableProfile',
                  'checked'
                )}>
              <span class="add-ons--span"></span>
            </label>

            <div class="plan__item--description">
              <h3 class="plan__item--title">Customizable profile</h3>
              <p class="plan__item--price">Custom theme on your profile</p>
            </div>
            <p class="add-ons--price">+$${
              this._data.currentTime.name === 'Monthly'
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

  _checkActiveAddOns(addOnsName, elementClass) {
    const addOnsData = addOnsName;
    const data = this._data.currentPlan.addOns.map(addOns => {
      const addOnsArr = addOns.name.split(' ');
      const addOnsName =
        addOnsArr[0].toLowerCase() +
        addOnsArr[1].charAt(0).toUpperCase() +
        addOnsArr[1].slice(1);

      return addOnsName === addOnsData ? 'active' : '';
    });
    if (data.includes('active')) return elementClass;
  }
}

export default new StepAddOnsView();
