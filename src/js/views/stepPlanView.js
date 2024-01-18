import View from "./View"
import iconArcade from "../../assets/images/icon-arcade.svg"
import iconAdvanced from "../../assets/images/icon-advanced.svg"
import iconPro from "../../assets/images/icon-pro.svg"
class StepPlanView extends View {
	_generateMarkup() {
		return `
    <div class="step__container--box" data-step="2">
    <h2 class="step--title">Select your plan</h2>
    <p class="step--description">You have the option of monthly or yearly
      billing.</p>

    <div class="plan__box">
    <div class="plan__box--desktop">
    <div class="plan__item">
      
      <img src="${iconArcade}" alt="">
      <div class="plan__item--description">
        <h3 class="plan__item--title">Arcade</h3>
        <p class="plan__item--price">$9/mo</p>
      </div>
    </div>
    <div class="plan__item">
      <img src="${iconAdvanced}" alt="">
      <div class="plan__item--description">
        <h3 class="plan__item--title">Advanced</h3>
        <p class="plan__item--price">$12/mo</p>
      </div>
    </div>
    <div class="plan__item">
      <img src="${iconPro}" alt="">
      <div class="plan__item--description">
        <h3 class="plan__item--title">Pro</h3>
        <p class="plan__item--price">$15/mo</p>
      </div>
    </div>
  </div>

      <div class="plan__switch">
        <p class="plan__switch--monthly plan__switch--active">Monthly</p>
        <label class="switch" for="switch">
          <input type="checkbox" name="switch" id="switch">
          <span class="plan__switch--slider"></span>
        </label>
        <p class="plan__switch-yearly">Yearly</p>
      </div>
    </div>

    <div class="btns__container">
      <button class="btn-steps btn--back ">Go Back</button>
      <button class="btn-steps btn--next">Next Step</button>
    </div>

  </div>
    `
	}
}

export default new StepPlanView()
