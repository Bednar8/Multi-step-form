class StepAddOnsView {
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
    <div class="step__container--box" data-step="3">
        <h2 class="step--title">Pick add-ons</h2>
        <p class="step--description">Add-ons help enhance your gaming
          experience.</p>

        <div class="plan__add-ons plan__box">

          <div class="plan__item plan__item-active">
            <label class="add-ons--label" for="add-ons1">
              <input class="add-ons--checkbox" type="checkbox" name="add-ons1"
                id="add-ons1" checked>
              <span class="add-ons--span"></span>
            </label>
            <div class="plan__item--description">
              <h3 class="plan__item--title">Online servica</h3>
              <p class="plan__item--price">Access to multiplayer games</p>
            </div>
            <p class="add-ons--price">+$1/mo</p>
          </div>

          <div class="plan__item">

            <label class="add-ons--label" for="add-ons2">
              <input class="add-ons--checkbox" type="checkbox" name="add-ons2"
                id="add-ons2" checked>
              <span class="add-ons--span"></span>
            </label>
            <div class="plan__item--description">
              <h3 class="plan__item--title">Larger storage</h3>
              <p class="plan__item--price">Extra 1TB of cloud save</p>
            </div>
            <p class="add-ons--price">+$1/mo</p>

          </div>

          <div class="plan__item">
            <label class="add-ons--label" for="add-ons3">
              <input class="add-ons--checkbox" type="checkbox" name="add-ons3"
                id="add-ons3" checked>
              <span class="add-ons--span"></span>
            </label>

            <div class="plan__item--description">
              <h3 class="plan__item--title">Customizable profile</h3>
              <p class="plan__item--price">Custom theme on your profile</p>
            </div>
            <p class="add-ons--price">+$1/mo</p>
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

export default new StepAddOnsView()
