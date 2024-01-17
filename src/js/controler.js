import * as model from "./model.js"
import stepInfoView from "./views/stepInfoView.js"
import stepPlanView from "./views/stepPlanView.js"
import stepAddOnsView from "./views/stepAddOnsView.js"
import stepSummaryView from "./views/stepSummaryView.js"
import stepThanksView from "./views/stepThanksView.js"

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
		case model.summary.step:
			controlSummary()
			break
		case model.stepThanks.step:
			controlStepThanks()
			break
	}
}

const controlStepInfo = function () {
	const data = model.stepInfo
	console.log(data)
	stepInfoView.render()
}

const controlStepPlan = function () {
	const data = model.stepInfo
	console.log(data)
	stepPlanView.render()
}

const controlStepAddOns = function () {
	const data = model.stepInfo
	console.log(data)
	stepAddOnsView.render()
}

const controlSummary = function () {
	const data = model.stepInfo
	console.log(data)
	stepSummaryView.render()
}

const controlStepThanks = function () {
	const data = model.stepInfo
	console.log(data)
	stepThanksView.render()
}

const init = function () {
	stepInfoView.addHandlerClick(controlSteps)
}

init()
