class StepPlanView {
	_parentEl = document.querySelector(".step__container")
	_data

	// Add handler on click (mobile and desktop)
	addHandlerClick(handler) {
		this._parentEl.addEventListener("click", function (e) {
			const btnsNext = document.querySelectorAll(".btn--next")
			btnsNext.forEach((btn) => {
				if (e.target !== btn) return
				handler()
			})
		})
	}

	// Render markup current step
	render(data) {
		this._data = data
		const markup = this._generateMarkup()
		this._clear()
		this._parentEl.insertAdjacentHTML("afterbegin", markup)
	}

	_clear() {
		this._parentEl.innerHTML = ""
	}

	_generateMarkup() {
		return `
    <div class="step__container--box" data-step="2">
    <h2 class="step--title">Select your plan</h2>
    <p class="step--description">You have the option of monthly or yearly
      billing.</p>

    <div class="plan__box">
      <div class="plan__box--desktop">
        <div class="plan__item plan__item-active">
          <img src="./assets/images/icon-arcade.svg" alt="">
          <div class="plan__item--description">
            <h3 class="plan__item--title">Arcade</h3>
            <p class="plan__item--price">$9/mo</p>
          </div>
        </div>
        <div class="plan__item">
          <img src="./assets/images/icon-advanced.svg" alt="">
          <div class="plan__item--description">
            <h3 class="plan__item--title">Advanced</h3>
            <p class="plan__item--price">$12/mo</p>
          </div>
        </div>
        <div class="plan__item">
          <img src="./assets/images/icon-pro.svg" alt="">
          <div class="plan__item--description">
            <h3 class="plan__item--title">Pro</h3>
            <p class="plan__item--price">$15/mo</p>
          </div>
        </div>
      </div>

      <div class="plan__switch">
        <p class="plan__switch--monthly">Monthly</p>
        <label class="switch" for="switch">
          <input type="checkbox" name="switch" id="switch">
          <span class="plan__switch--slider"></span>
        </label>
        <p class="plan__switch-yearly">Yearly</p>
      </div>
    </div>

    <div class=".btns__container btns__container--desktop">
      <button class="btn-steps btn--back ">Go Back</button>
      <button class="btn-steps btn--next">Next Step</button>
    </div>

  </div>
    `
	}
}

export default new StepPlanView()
