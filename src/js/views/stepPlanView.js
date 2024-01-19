import View from './View';
import iconArcade from '../../assets/images/icon-arcade.svg';
import iconAdvanced from '../../assets/images/icon-advanced.svg';
import iconPro from '../../assets/images/icon-pro.svg';
class StepPlanView extends View {
  // _allPlansArr = Array.from(document.querySelectorAll('.plan__item'));
  _data;

  addHandlerChoosePlan(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const plan = e.target.closest('.plan__item');

      if (!plan) return;

      const isPlanActive = plan.classList.contains('plan__item-active');
      const allPlans = document.querySelectorAll('.plan__item');

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

  getPlanOption() {
    const allPlans = Array.from(document.querySelectorAll('.plan__item'));
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

  _generateMarkup() {
    return `
    <div class="step__container--box" data-step="2">
    <h2 class="step--title">Select your plan</h2>
    <p class="step--description">You have the option of monthly or yearly
      billing.</p>

    <div class="plan__box">
    <div class="plan__box--desktop">
    <div class="plan__item" data-plan="arcade">
      <img src="${iconArcade}" alt="">
      <div class="plan__item--description">
        <h3 class="plan__item--title">Arcade</h3>
        <p class="plan__item--price">$9/mo</p>
      </div>
    </div>
    <div class="plan__item" data-plan="advanced">
      <img src="${iconAdvanced}" alt="">
      <div class="plan__item--description">
        <h3 class="plan__item--title">Advanced</h3>
        <p class="plan__item--price">$12/mo</p>
      </div>
    </div>
    <div class="plan__item" data-plan="pro">
      <img src="${iconPro}" alt="">
      <div class="plan__item--description">
        <h3 class="plan__item--title">Pro</h3>
        <p class="plan__item--price">$15/mo</p>
      </div>
    </div>
  </div>

      <div class="plan__switch">
        <p class="plan__switch--monthly plan__switch--active plan__switch--time" data-time="monthly">Monthly</p>
        <label class="switch" for="switch">
          <input type="checkbox" name="switch" id="switch">
          <span class="plan__switch--slider"></span>
        </label>
        <p class="plan__switch-yearly plan__switch--time" data-time="yearly">Yearly</p>
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
