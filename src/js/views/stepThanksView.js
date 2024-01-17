// Import good path to icons
class StepThanksView {
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
    <div class="step__container--box thanks__box" data-step="5">
        <div class="thanks__box">
          <img src="./assets/images/icon-thank-you.svg" alt="">
          <h2 class="step--title">Thank you!</h2>
          <p class="step--description">Thanks for confirming your subscription!
            We
            hope you have fun
            using our platform. If you ever need support, please feel free
            to email us at support@loremgaming.com.</p>
        </div>
      </div>
    `
	}
}

export default new StepThanksView()
