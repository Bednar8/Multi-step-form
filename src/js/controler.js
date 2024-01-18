import * as model from "./model.js"
import {view} from "./views/View.js"
import stepInfoView from "./views/stepInfoView.js"
import stepPlanView from "./views/stepPlanView.js"
import stepAddOnsView from "./views/stepAddOnsView.js"
import stepSummaryView from "./views/stepSummaryView.js"
import stepThanksView from "./views/stepThanksView.js"
import navView from "./views/navView.js"

const controlSteps = function () {
	switch (model.state.currentStep) {
		case model.stepInfo.step:
			controlStepInfo()
			break
		case model.stepPlan.step:
			controlStepPlan()
			break
		case model.stepAddOns.step:
			controlStepAddOns()
			break
		case model.stepSummary.step:
			controlSummary()
			break
		case model.stepThanks.step:
			controlStepThanks()
			break
	}
	// Control buttons to not display go back button when user is on info step
	view.controlButtons(model.state.currentStep, model.stepInfo.step)
	// control nav item -> add active class to current step
	navView.addActiveNavItem(model.state.currentStep)
}

const controlStepInfo = function () {
	const data = model.stepInfo
	stepInfoView.render()
}

const controlStepPlan = function () {
	const data = model.stepPlan
	stepPlanView.render()
}

const controlStepAddOns = function () {
	const data = model.stepAddOns
	stepAddOnsView.render()
}

const controlSummary = function () {
	const data = model.stepSummary
	stepSummaryView.render()
}

const controlStepThanks = function () {
	const data = model.stepInfo
	stepThanksView.render()
}

const init = function () {
	view.controlButtons(model.state.currentStep, model.stepInfo.step)
	view.addHandlerClick(controlSteps)
	navView.addActiveNavItem(model.state.currentStep)
}

init()
