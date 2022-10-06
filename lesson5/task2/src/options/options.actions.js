export const TOGGLE_OPTION = 'OPTIONS/TOGGLE_OPTION';

export const toogleOption = optionId => ({
  type: TOGGLE_OPTION,
  payload: {
    optionId,
  },
});
