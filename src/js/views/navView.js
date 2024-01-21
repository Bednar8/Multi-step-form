class NavView {
  _navItems = document.querySelectorAll('.nav__step--anchor');

  addHandlerNavClick(handler) {
    const navLinks = Array.from(this._navItems);
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        handler(+link.dataset.step);
      });
    });
  }

  getCurrentStep() {
    const activeLinks = Array.from(this._navItems);
    const activeLink = activeLinks.find(link =>
      link.classList.contains('nav__step--anchor-active')
    );
    return +activeLink.dataset.step;
  }

  addActiveNavItem(currentStep, stepLength) {
    const lastEl = Array.from(this._navItems).at(-1);
    this._navItems.forEach(el => {
      if (+el.dataset.step === currentStep) {
        el.classList.add('nav__step--anchor-active');
      } else if (currentStep === stepLength) {
        lastEl.classList.add('nav__step--anchor-active');
      } else {
        el.classList.remove('nav__step--anchor-active');
      }
    });
  }
}

export default new NavView();
