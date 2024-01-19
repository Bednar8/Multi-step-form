export const state = {
  currentPlan: {
    name: '',
    addOns: [],
  },
  allPlan: {
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
  },
  currentStep: 1,
  correctForm: false,
  currentTime: {
    name: 'monthly',
    value: '',
  },
};

export const stepInfo = {
  step: 1,
};

export const stepPlan = {
  step: 2,
};

export const stepAddOns = {
  step: 3,
  onlineServica: {
    monthly: 1,
    yearly: 10,
  },
  largerStorage: {
    monthly: 2,
    yearly: 20,
  },
  customizableProfile: {
    monthly: 2,
    yearly: 20,
  },
};

export const stepSummary = {
  step: 4,
};

export const stepThanks = {
  step: 5,
};
