import * as model from './model.js';
import { view } from './views/View.js';
import stepInfoView from './views/stepInfoView.js';
import stepPlanView from './views/stepPlanView.js';
import stepAddOnsView from './views/stepAddOnsView.js';
import stepSummaryView from './views/stepSummaryView.js';
import stepThanksView from './views/stepThanksView.js';
import navView from './views/navView.js';

const controlNextSteps = function () {
  // Check if current step is on info step-> is yes do validation and pass value to correctForm
  if (model.state.currentStep === model.stepInfo.step) {
    model.state.correctForm = stepInfoView.validationForm();
  }
  if (!model.state.correctForm) return;
  // go to next step
  model.state.currentStep++;
  switch (model.state.currentStep) {
    case model.stepInfo.step:
      stepInfoView.render();
      break;
    case model.stepPlan.step:
      stepPlanView.render();
      break;
    case model.stepAddOns.step:
      stepAddOnsView.render();
      break;
    case model.stepSummary.step:
      stepSummaryView.render();
      break;
    case model.stepThanks.step:
      stepThanksView.render();
      break;
  }

  // Control buttons to not display go back button when user is on info step
  view.controlButtons(model.state.currentStep, model.stepInfo.step);
  // control nav item -> add active class to current step
  navView.addActiveNavItem(model.state.currentStep);
};

const controlBackSteps = function () {
  // go to back step
  model.state.currentStep--;
  switch (model.state.currentStep) {
    case model.stepInfo.step:
      stepInfoView.render();
      break;
    case model.stepPlan.step:
      stepPlanView.render();
      break;
    case model.stepAddOns.step:
      stepAddOnsView.render();
      break;
    case model.stepSummary.step:
      stepSummaryView.render();
      break;
    case model.stepThanks.step:
      stepThanksView.render();
      break;
  }

  // Control buttons to not display go back button when user is on info step
  view.controlButtons(model.state.currentStep, model.stepInfo.step);
  // control nav item -> add active class to current step
  navView.addActiveNavItem(model.state.currentStep);
};

const controlPlan = function () {
  stepPlanView.getPlanOption();
};

const init = function () {
  view.controlButtons(model.state.currentStep, model.stepInfo.step);
  view.addHandlerClickNextStep(controlNextSteps);
  view.addHandlerClickBackStep(controlBackSteps);
  navView.addActiveNavItem(model.state.currentStep);
  stepPlanView.addHandlerChoosePlan(controlPlan);
};

init();
