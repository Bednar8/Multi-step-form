export const stepInfoMarkup = function () {
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
