class StepInfoView {
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
    <div class="step__container--box" data-step="1">
        <h2 class="step--title">Personal info</h2>
        <p class="step--description">Please provide your name, email address,
          and phone number.</p>
        <form class="form">
          <div class="form--item">
            <div class="form--label">
              <label for="name">Name</label>
              <p class="form--item-error"></p>
            </div>
            <input class="form--input" id="name" type="text"
              placeholder="e.g. Stephen King" required>
          </div>
          <div class="form--item">
            <div class="form--label">
              <label for="email">Email Address</label>
              <p class="form--item-error"></p>
            </div>
            <input class="form--input" id="email" type="text"
              placeholder="e.g. stephenking@lorem.com" required>
          </div>
          <div class="form--item">
            <div class="form--label">
              <label for="phone">Phone Number</label>
              <p class="form--item-error">This field is required</p>
            </div>
            <input class="form--input form--input-error" id="phone" type="text"
              placeholder="e.g. +1 234 567 890" required>
          </div>
        </form>
        <div class=".btns__container btns__container--desktop">
          <button class="btn-steps btn--back ">Go Back</button>
          <button class="btn-steps btn--next">Next Step</button>
        </div>
      </div>
    `
	}
}

export default new StepInfoView()
