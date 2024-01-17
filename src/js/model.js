import {stepInfoMarkup} from "./views/stepInfoView"
import {stepPlanMarkup} from "./views/stepPlanView"
import {stepAddOnsMarkup} from "./views/stepAddOnsView"
import {stepSummaryMarkup} from "./views/stepSummaryView"
import {stepThanksMarkup} from "./views/stepThanksView"

export const state = {
	currentPlan: {
		plan: "",
		addOns: [],
	},
	currentStep: 1,
}

const stepInfo = {
	step: 1,
	correctForm: false,
	markup: stepInfoMarkup,
}

const stepPlan = {
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
	markup: stepPlanMarkup,
}

const stepAddOns = {
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
	markup: stepAddOnsMarkup,
}

const summary = {
	step: 4,
	markup: stepSummaryMarkup,
}

const stepThanks = {
	step: 5,
	markup: stepThanksMarkup,
}
