import * as model from './model.js';
import { view } from './views/View.js';
import stepInfoView from './views/stepInfoView.js';
import stepPlanView from './views/stepPlanView.js';
import stepAddOnsView from './views/stepAddOnsView.js';
import stepSummaryView from './views/stepSummaryView.js';
import stepThanksView from './views/stepThanksView.js';
import navView from './views/navView.js';

const switchCurrentStep = function () {
  switch (model.state.currentStep) {
    case model.state.steps.stepInfo:
      stepInfoView.render();
      break;
    case model.state.steps.stepPlan:
      stepPlanView.render(model.state);
      break;
    case model.state.steps.stepAddOns:
      stepAddOnsView.render(model.state);
      break;
    case model.state.steps.stepSummary:
      stepSummaryView.render(model.state);
      break;
    case model.state.steps.stepThanks:
      stepThanksView.render();
      break;
  }
};

const controlNextSteps = function () {
  // Check if current step is on info step-> is yes do validation and pass value to correctForm
  if (model.state.currentStep === model.state.steps.stepInfo) {
    model.state.correctForm = stepInfoView.validationForm();
  }
  if (!model.state.correctForm) return;
  // Check if current plan is choosen -> if no cant go to next step and render Error
  if (model.state.currentStep === model.state.steps.stepPlan) {
    if (model.state.currentPlan.name === '') {
      stepPlanView.renderError();
      return;
    }
  }

  // go to next step
  model.state.currentStep++;

  switchCurrentStep();

  // Control buttons to not display go back button when user is on info step
  view.controlButtons(model.state.currentStep, model.state.steps.stepInfo);
  // control nav item -> add active class to current step
  navView.addActiveNavItem(
    model.state.currentStep,
    Object.keys(model.state.steps).length
  );
};

const controlBackSteps = function () {
  // go to back step
  model.state.currentStep--;
  switchCurrentStep();

  // Control buttons to not display go back button when user is on info step
  view.controlButtons(model.state.currentStep, model.state.steps.stepInfo);
  // control nav item -> add active class to current step
  navView.addActiveNavItem(
    model.state.currentStep,
    Object.keys(model.state.steps).length
  );
};

// Control nav

const controlNav = function (nextStep) {
  const currentStep = navView.getCurrentStep();

  // Check if current step is on info step-> is yes do validation and pass value to correctForm
  if (model.state.currentStep === model.state.steps.stepInfo) {
    model.state.correctForm = stepInfoView.validationForm();
  }
  if (!model.state.correctForm) return;

  if (
    model.state.currentPlan.name === '' &&
    (nextStep === model.state.steps.stepSummary ||
      nextStep === model.state.steps.stepAddOns)
  ) {
    model.state.currentStep = model.state.steps.stepPlan;
    switchCurrentStep();
    stepPlanView.renderError();
    view.controlButtons(model.state.currentStep, model.state.steps.stepInfo);
    navView.addActiveNavItem(
      model.state.currentStep,
      Object.keys(model.state.steps).length
    );
    return;
  }
  // Check if current plan is choosen -> if no cant go to next step and render Error
  if (currentStep === model.state.steps.stepPlan) {
    if (model.state.currentPlan.name === '') {
      stepPlanView.renderError();
      return;
    }
  }

  model.state.currentStep = nextStep;
  switchCurrentStep();

  // Control buttons to not display go back button when user is on info step
  view.controlButtons(model.state.currentStep, model.state.steps.stepInfo);
  // control nav item -> add active class to current step
  navView.addActiveNavItem(
    model.state.currentStep,
    Object.keys(model.state.steps).length
  );
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

const controlSummaryChangePlan = function () {
  model.state.currentStep = model.state.steps.stepPlan;

  if (model.state.currentPlan.name === '') {
    stepPlanView.renderError();
    return;
  }

  switchCurrentStep();

  // Control buttons to not display go back button when user is on info step
  view.controlButtons(model.state.currentStep, model.state.steps.stepInfo);
  // control nav item -> add active class to current step
  navView.addActiveNavItem(
    model.state.currentStep,
    Object.keys(model.state.steps).length
  );
};

const init = function () {
  view.controlButtons(model.state.currentStep, model.state.steps.stepInfo);
  view.addHandlerClickNextStep(controlNextSteps);
  view.addHandlerClickBackStep(controlBackSteps);
  navView.addActiveNavItem(
    model.state.currentStep,
    Object.keys(model.state.steps).length
  );
  navView.addHandlerNavClick(controlNav);
  stepPlanView.addHandlerChoosePlan(controlPlan);
  stepPlanView.addHandlerChangeTime(controlTime);
  stepAddOnsView.addHandlerChooseAddOns(controlAddOns);
  stepSummaryView.addHandlerClickChangePlan(controlSummaryChangePlan);
};

init();
