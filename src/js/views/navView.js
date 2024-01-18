class NavView {
	_navItems = document.querySelectorAll(".nav__step--anchor")
	addActiveNavItem(currentStep) {
		this._navItems.forEach((el) => {
			if (+el.dataset.step === currentStep) {
				el.classList.add("nav__step--anchor-active")
			} else {
				el.classList.remove("nav__step--anchor-active")
			}
		})
	}
}

export default new NavView()
