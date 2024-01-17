class StepSummaryView {
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
    <div class="step__container--box" data-step="4">
    <h2 class="step--title">Finishing up</h2>
    <p class="step--description">Double-check everything looks OK before
      confirming.</p>

    <div class="summary">
      <div class="summary--box">
        <div class="summary__plan">
          <div class="summary__plan--description">
            <p class="summary__plan--title">Arcade <span
                class="summary__time">(Monthly)</span></p>
            <a href="#">Change</a>
          </div>
          <p class="summary__plan--price">$9/mo</p>
        </div>

        <div class="summary__add-ons">
          <p class="summary__add-ons--title">Online service</p>
          <p class="summary__add-ons--price">+$1/mo</p>
        </div>
        <div class="summary__add-ons">
          <p class="summary__add-ons--title">Larger storage</p>
          <p class="summary__add-ons--price">+$2/mo</p>
        </div>
      </div>

      <div class="summary__total">
        <p>Total <span class="summary__total--time">(per month)</span></p>
        <p class="summary__total--price">+$12/mo</p>
      </div>
      <div class=".btns__container btns__container--desktop">
        <button class="btn-steps btn--back ">Go Back</button>
        <button class="btn-steps btn--next">Next Step</button>
      </div>
    </div>

  </div>
    `
	}
}

export default new StepSummaryView()
