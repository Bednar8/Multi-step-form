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
  allAddOns: {
    onlineServica: {
      name: 'Online servica',
      monthly: 1,
      yearly: 10,
    },
    largerStorage: {
      name: 'Larger storage',
      monthly: 2,
      yearly: 20,
    },
    customizableProfile: {
      name: 'Customizable profile',
      monthly: 2,
      yearly: 20,
    },
  },
  currentStep: 1,
  correctForm: false,
  currentTime: {
    name: 'Monthly',
  },
  steps: {
    stepInfo: 1,
    stepPlan: 2,
    stepAddOns: 3,
    stepSummary: 4,
    stepThanks: 5,
  },
};
