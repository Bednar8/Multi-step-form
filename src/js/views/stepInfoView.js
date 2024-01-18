import View from './View';
class StepInfoView extends View {
  _formInputs = document.querySelectorAll('.form--input');

  validationForm() {
    let isCorrectForm = false;
    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const phoneRegex = /^(?:\+?\d{9,})$/;
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const phone = document.querySelector('#phone');
    if (name.value.trim() === '') this.setError(name, 'This field is required');
    else this.removeError(name);

    if (email.value.trim() === '')
      this.setError(email, 'This field is required');
    else this.removeError(email);

    if (phone.value.trim() === '')
      this.setError(phone, 'This field is required');
    else this.removeError(phone);

    if (!emailRegex.test(email.value) && email.value.trim() !== '')
      this.setError(email, 'Invalid email address.');
    else if (email.value.trim() !== '') this.removeError(email);

    if (!phoneRegex.test(phone.value) && phone.value.trim() !== '')
      this.setError(phone, 'Invalid phone number.');
    else if (phone.value.trim() !== '') this.removeError(phone);

    if (
      name.value.trim() !== '' &&
      emailRegex.test(email.value) &&
      phoneRegex.test(phone.value)
    ) {
      isCorrectForm = true;
    }

    return isCorrectForm;
  }

  setError(element, message) {
    const input = element.closest('.form--item').querySelector('.form--input');
    const errorDisplay = element
      .closest('.form--item')
      .querySelector('.form--item-error');

    input.classList.add('form--input-error');
    errorDisplay.textContent = message;
  }

  removeError(element) {
    const input = element.closest('.form--item').querySelector('.form--input');
    const errorDisplay = element
      .closest('.form--item')
      .querySelector('.form--item-error');

    input.classList.remove('form--input-error');
    errorDisplay.textContent = '';
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
              <p class="form--item-error"></p>
            </div>
            <input class="form--input" id="phone" type="text"
              placeholder="e.g. +1 234 567 890" required>
          </div>
        </form>
        <div class="btns__container btns__container--desktop">
          <button class="btn-steps btn--next">Next Step</button>
        </div>
      </div>
    `;
  }
}

export default new StepInfoView();
