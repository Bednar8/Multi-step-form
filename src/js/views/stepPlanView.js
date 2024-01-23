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

  changePlanValue() {
    const planBox = document.querySelector('.plan__box');
    if (!planBox) return;
    const markup =
      this._generateMarkupPlan(
        this._data.allPlan.arcade,
        iconArcade,
        'Arcade'
      ) +
      this._generateMarkupPlan(
        this._data.allPlan.advanced,
        iconAdvanced,
        'Advanced'
      ) +
      this._generateMarkupPlan(this._data.allPlan.pro, iconPro, 'Pro');

    planBox.innerHTML = '';
    planBox.insertAdjacentHTML('afterbegin', markup);
  }

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

    <div class="plan">
      <div class="plan__box">
          ${this._generateMarkupPlan(
            this._data.allPlan.arcade,
            iconArcade,
            'Arcade'
          )}
          ${this._generateMarkupPlan(
            this._data.allPlan.advanced,
            iconAdvanced,
            'Advanced'
          )}
          ${this._generateMarkupPlan(this._data.allPlan.pro, iconPro, 'Pro')}
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

  _generateMarkupPlan(plan, icon, planName) {
    const planWithLower = planName.charAt(0).toLowerCase() + planName.slice(1);
    return `<div class="plan__item plan__item--option ${
      this._data.currentTime.name === 'Monthly' ? `f-center` : ``
    } ${
      this._data.currentPlan.name === planName ? 'plan__item-active' : ''
    }" data-plan="${planWithLower}">
      <img src="${icon}" alt="">
      <div class="plan__item--description">
        <h3 class="plan__item--title">${planName}</h3>
        <p class="plan__item--price">$${
          this._data.currentTime.name === 'Monthly'
            ? `${plan.monthly}/mo`
            : `${plan.yearly}/yr`
        }</p>
        <p class="plan__item--prom ${
          this._data.currentTime.name === 'Monthly' ? `hidden` : ``
        }">2 months free</p>
      </div>
    </div>`;
  }
}

export default new StepPlanView();
