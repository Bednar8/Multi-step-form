import View from './View';
class StepSummaryView extends View {
  addHandlerClickChangePlan(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const changePlanbtn = this.querySelector('.summary--change-anchor');
      if (e.target !== changePlanbtn) return;
      handler();
    });
  }

  _generateMarkup() {
    return `
    <div class="step__container--box" data-step="4">
    <h2 class="step--title">Finishing up</h2>
    <p class="step--description">Double-check everything looks OK before
      confirming.</p>

    <div class="summary">
      <div class="summary--box">
        <div class="summary__plan">
          <div class="summary__plan--description">
            <p class="summary__plan--title">${this._data.currentPlan.name} <span
                class="summary__time">(${
                  this._data.currentTime.name
                })</span></p>
            <a class="summary--change-anchor" href="#">Change</a>
          </div>
          <p class="summary__plan--price">$${
            this._data.currentTime.name === 'Monthly'
              ? `${
                  this._data.allPlan[this._data.currentPlan.name.toLowerCase()]
                    .monthly
                }/mo`
              : `${
                  this._data.allPlan[this._data.currentPlan.name.toLowerCase()]
                    .yearly
                }/yr`
          }</p>
        </div>
        ${this._generateMarkupAddOns()}
        
      </div>

      <div class="summary__total">
        <p>Total <span class="summary__total--time">(per ${
          this._data.currentTime.name === 'Monthly' ? 'month' : 'year'
        })</span></p>
        <p class="summary__total--price">+$${this._calculateTotal()}</p>
      </div>
      <div class="btns__container">
        <button class="btn-steps btn--back ">Go Back</button>
        <button class="btn-steps btn--next btn--confirm">Confirm</button>
      </div>
    </div>

  </div>
    `;
  }

  _generateMarkupAddOns() {
    return this._data.currentPlan.addOns
      .map(addOns => {
        return `<div class="summary__add-ons">
      <p class="summary__add-ons--title">${addOns.name}</p>
      <p class="summary__add-ons--price">+$${
        this._data.currentTime.name === 'Monthly'
          ? `${addOns.monthly}/mo`
          : `${addOns.yearly}/yr`
      }</p>
    </div>`;
      })
      .join('');
  }

  _calculateTotal() {
    const planPrize =
      this._data.currentTime.name === 'Monthly'
        ? this._data.allPlan[this._data.currentPlan.name.toLowerCase()].monthly
        : this._data.allPlan[this._data.currentPlan.name.toLowerCase()].yearly;

    const addOnsPrize = this._data.currentPlan.addOns
      .map(addOns =>
        this._data.currentTime.name === 'Monthly'
          ? addOns.monthly
          : addOns.yearly
      )
      .reduce((acc, cur) => acc + cur, 0);

    return this._data.currentTime.name === 'Monthly'
      ? `${planPrize + addOnsPrize}/mo`
      : `${planPrize + addOnsPrize}/yr`;
  }
}

export default new StepSummaryView();
