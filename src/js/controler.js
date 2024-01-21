import * as model from './model.js';
import { view } from './views/View.js';
import stepInfoView from './views/stepInfoView.js';
import stepPlanView from './views/stepPlanView.js';
import stepAddOnsView from './views/stepAddOnsView.js';
import stepSummaryView from './views/stepSummaryView.js';
import stepThanksView from './views/stepThanksView.js';
import navView from './views/navView.js';

// 1. Feature to change step using nav -> important to not do if neccesary things isnt did in current step
// 2. Create method in summary step to user can change plan -> if click on "change" go to step plan
// 3. Change class name in html/css/js becouse some name like plan__box--desktop but it use in desktop and mobile

// Maybe its good idea to calculate monthly and yearly price (with $/yr/mo) or story current price or something like that

const switchCurrentStep = function () {
  switch (model.state.currentStep) {
    case model.stepInfo.step:
      stepInfoView.render();
      break;
    case model.stepPlan.step:
      stepPlanView.render(model.state);
      break;
    case model.stepAddOns.step:
      stepAddOnsView.render(model.state);
      break;
    case model.stepSummary.step:
      stepSummaryView.render(model.state);
      break;
    case model.stepThanks.step:
      stepThanksView.render();
      break;
  }
};

const controlNextSteps = function () {
  // Check if current step is on info step-> is yes do validation and pass value to correctForm
  if (model.state.currentStep === model.stepInfo.step) {
    model.state.correctForm = stepInfoView.validationForm();
  }
  if (!model.state.correctForm) return;
  // Check if current plan is choosen -> if no cant go to next step and render Error
  if (model.state.currentStep === model.stepPlan.step) {
    if (model.state.currentPlan.name === '') {
      stepPlanView.renderError();
      return;
    }
  }

  // go to next step
  model.state.currentStep++;
  // Check if current step is addOns -> if yes add empty array
  if (model.state.currentStep === model.stepAddOns.step) {
    model.state.currentPlan.addOns = [];
  }
  switchCurrentStep();

  // Control buttons to not display go back button when user is on info step
  view.controlButtons(model.state.currentStep, model.stepInfo.step);
  // control nav item -> add active class to current step
  navView.addActiveNavItem(model.state.currentStep);
};

const controlBackSteps = function () {
  // go to back step
  model.state.currentStep--;
  switchCurrentStep();
  // Check if current step is addOns -> if yes add empty array
  if (model.state.currentStep === model.stepAddOns.step) {
    model.state.currentPlan.addOns = [];
  }

  // Control buttons to not display go back button when user is on info step
  view.controlButtons(model.state.currentStep, model.stepInfo.step);
  // control nav item -> add active class to current step
  navView.addActiveNavItem(model.state.currentStep);
};

// Control plan and add current plan to state
const controlPlan = function () {
  const currentPlanKey = stepPlanView.getPlanOption();
  if (!currentPlanKey) return;
  model.state.currentPlan.name =
    currentPlanKey.charAt(0).toUpperCase() + currentPlanKey.slice(1);
};

// Control time and add current time to state
const controlTime = function () {
  const currentTimeName = stepPlanView.getPlanTime();

  model.state.currentTime.name =
    currentTimeName.charAt(0).toUpperCase() + currentTimeName.slice(1);
  // stepPlanView.render(model.state);
  stepPlanView.changePlanValue();
};

// Control addOns, if state has more elements than addOns array then do empty array and get correct elements
const controlAddOns = function () {
  const addOnsNames = stepAddOnsView.getCurrentAddOns();
  addOnsNames.forEach(name => {
    if (model.state.currentPlan.addOns.length > addOnsNames.length) {
      model.state.currentPlan.addOns = [];
      model.state.currentPlan.addOns.push(model.state.allAddOns[name]);
      return;
    }
    if (model.state.currentPlan.addOns.includes(model.state.allAddOns[name]))
      return;
    model.state.currentPlan.addOns.push(model.state.allAddOns[name]);
  });
};

const init = function () {
  view.controlButtons(model.state.currentStep, model.stepInfo.step);
  view.addHandlerClickNextStep(controlNextSteps);
  view.addHandlerClickBackStep(controlBackSteps);
  navView.addActiveNavItem(model.state.currentStep);
  stepPlanView.addHandlerChoosePlan(controlPlan);
  stepPlanView.addHandlerChangeTime(controlTime);
  stepAddOnsView.addHandlerChooseAddOns(controlAddOns);
};

init();
