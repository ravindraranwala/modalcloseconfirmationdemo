import ConnectedConfirmation from '../containers/ConnectedConfirmation';
import { createConfirmation } from 'react-confirm';

const defaultConfirmation = createConfirmation(ConnectedConfirmation);

export function confirm(confirmation, options = {}) {
  console.log("calling confirm !" + confirmation);
  return defaultConfirmation({ confirmation, ...options });
}
