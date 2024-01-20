import View from './View';
import iconArcade from '../../assets/images/icon-arcade.svg';
import iconAdvanced from '../../assets/images/icon-advanced.svg';
import iconPro from '../../assets/images/icon-pro.svg';
class StepPlanView extends View {
  _data;

  addHandlerChoosePlan(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const plan = e.target.closest('.plan__item--option');

      if (!plan) return;

      const isPlanActive = plan.classList.contains('plan__item-active');
      const allPlans = document.querySelectorAll('.plan__item--option');

      allPlans.forEach(el => el.classList.remove('plan__item-active'));
      plan.classList.add('plan__item-active');

      handler();
    });
  }

  addHandlerChangeTime(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const checkbox = e.target.closest('#switch');
      const monthly = this.querySelector('.plan__switch--monthly');
      const yearly = this.querySelector('.plan__switch-yearly');
      if (!checkbox) return;
      if (checkbox.checked) {
        yearly.classList.add('plan__switch--active');
        monthly.classList.remove('plan__switch--active');
      } else {
        monthly.classList.add('plan__switch--active');
        yearly.classList.remove('plan__switch--active');
      }
      handler();
    });
  }

  // Feature to do -> if change time then not to render whole step but only change text in plan option (it's neccesary becouse is animation on switch animation)
  changePlanValue() {
    const input = document.querySelector('#switch');
    const planPrize = document.querySelectorAll('.plan__item--price');
    if (input.checked === true) {
      // ${
      //   this._data.currentTime.name === 'Monthly'
      //     ? `${this._data.allPlan.arcade.monthly}/mo`
      //     : `${this._data.allPlan.arcade.yearly}/yr`
      // }
      // console.log(planPrize);
    }
  }
  ///////////////////////////////////////

  getPlanOption() {
    const allPlans = Array.from(
      document.querySelectorAll('.plan__item--option')
    );
    const currentPlan = allPlans.find(plan =>
      plan.classList.contains('plan__item-active')
    );
    return currentPlan.dataset.plan;
  }

  getPlanTime() {
    const allTimeElements = Array.from(
      document.querySelectorAll('.plan__switch--time')
    );
    const currentTime = allTimeElements.find(time =>
      time.classList.contains('plan__switch--active')
    );
    if (!currentTime) return;
    return currentTime.dataset.time;
  }

  renderError() {
    const errorMsg = document.querySelector('.plan__error');
    errorMsg.classList.remove('hidden');
  }

  _generateMarkup() {
    return `
    <div class="step__container--box" data-step="2">
    <h2 class="step--title">Select your plan</h2>
    <p class="step--description">You have the option of monthly or yearly
      billing.</p>
      <p class="plan__error form--item-error hidden">Choose the plan to go the next step.</p>

    <div class="plan__box">
    <div class="plan__box--desktop">
    <div class="plan__item plan__item--option ${
      this._data.currentPlan.name === 'Arcade' ? 'plan__item-active' : ''
    }" data-plan="arcade">
      <img src="${iconArcade}" alt="">
      <div class="plan__item--description">
        <h3 class="plan__item--title">Arcade</h3>
        <p class="plan__item--price">$${
          this._data.currentTime.name === 'Monthly'
            ? `${this._data.allPlan.arcade.monthly}/mo`
            : `${this._data.allPlan.arcade.yearly}/yr`
        }</p>
      </div>
    </div>
    <div class="plan__item plan__item--option ${
      this._data.currentPlan.name === 'Advanced' ? 'plan__item-active' : ''
    }" data-plan="advanced">
      <img src="${iconAdvanced}" alt="">
      <div class="plan__item--description">
        <h3 class="plan__item--title">Advanced</h3>
        <p class="plan__item--price">$${
          this._data.currentTime.name === 'Monthly'
            ? `${this._data.allPlan.advanced.monthly}/mo`
            : `${this._data.allPlan.advanced.yearly}/yr`
        }</p>
      </div>
    </div>
    <div class="plan__item plan__item--option ${
      this._data.currentPlan.name === 'Pro' ? 'plan__item-active' : ''
    }" data-plan="pro">
      <img src="${iconPro}" alt="">
      <div class="plan__item--description">
        <h3 class="plan__item--title">Pro</h3>
        <p class="plan__item--price">$${
          this._data.currentTime.name === 'Monthly'
            ? `${this._data.allPlan.pro.monthly}/mo`
            : `${this._data.allPlan.pro.yearly}/yr`
        }</p>
      </div>
    </div>
  </div>

      <div class="plan__switch">
        <p class="plan__switch--monthly ${
          this._data.currentTime.name === 'Monthly'
            ? `plan__switch--active`
            : ``
        } plan__switch--time" data-time="monthly">Monthly</p>
        <label class="switch" for="switch">
          <input type="checkbox" name="switch" id="switch" ${
            this._data.currentTime.name === 'Monthly' ? '' : 'checked'
          }>
          <span class="plan__switch--slider"></span>
        </label>
        <p class="plan__switch-yearly ${
          this._data.currentTime.name === 'Yearly' ? `plan__switch--active` : ``
        } plan__switch--time" data-time="yearly">Yearly</p>
      </div>
    </div>

    <div class="btns__container">
      <button class="btn-steps btn--back ">Go Back</button>
      <button class="btn-steps btn--next">Next Step</button>
    </div>

  </div>
    `;
  }
}

export default new StepPlanView();
