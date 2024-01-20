import View from './View';
class StepSummaryView extends View {
  _generateMarkup() {
    console.log(this._data);
    console.log(
      this._data.allPlan[this._data.currentPlan.name.toLowerCase()].monthly
    );

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
            <a href="#">Change</a>
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
        <p class="summary__total--price">+$${this._calculateTotal()}/mo</p>
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

    const addOnsPrize = this._data.currentPlan.addOns.reduce((acc, cur) => {
      return this._data.currentTime.name === 'Monthly'
        ? acc.monthly + cur.monthly
        : acc.yearly + cur.yearly;
    }, '');
    console.log(addOnsPrize);

    return planPrize;
  }
}

export default new StepSummaryView();
