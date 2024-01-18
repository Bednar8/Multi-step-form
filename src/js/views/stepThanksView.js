import View from "./View"
import iconThanks from "../../assets/images/icon-thank-you.svg"
class StepThanksView extends View {
	_generateMarkup() {
		return `
    <div class="step__container--box thanks__box" data-step="5">
        <div class="thanks__box">
          <img src="${iconThanks}" alt="">
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
