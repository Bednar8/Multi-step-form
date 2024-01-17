import * as model from "./model.js"
import stepInfoView from "./views/stepInfoView.js"
import stepPlanView from "./views/stepPlanView.js"

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
	}
	// if(currentStep === 1) controlStepInfo()
	// if(currentStep === 1) controlStepInfo()
	// if(currentStep === 1) controlStepInfo()
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
	stepPlanView.render()
}

const init = function () {
	stepInfoView.addHandlerClick(controlSteps)
}

init()
