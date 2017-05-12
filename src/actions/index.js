export const ON_CONFIRM = 'ON_CONFIRM';
export function onConfirmation(isModalActive) {
  console.log("Action is triggered !" + isModalActive);
  return {
    type: ON_CONFIRM,
    payload: isModalActive
  };
}
