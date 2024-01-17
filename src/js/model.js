export const state = {
	currentPlan: {
		plan: "",
		addOns: [],
	},
	currentStep: 5,
}

export const stepInfo = {
	step: 1,
	correctForm: false,
}

export const stepPlan = {
	step: 2,
	arcade: {
		monthly: 9,
		yearly: 90,
	},
	advanced: {
		monthly: 12,
		yearly: 120,
	},
	pro: {
		monthly: 15,
		yearly: 150,
	},
}

export const stepAddOns = {
	step: 3,
	onlineServica: {
		monthly: 1,
		yearly: 10,
	},
	largerStorage: {
		monthly: 1,
		yearly: 10,
	},
	customizableProfile: {
		monthly: 2,
		yearly: 20,
	},
}

export const summary = {
	step: 4,
}

export const stepThanks = {
	step: 5,
}
