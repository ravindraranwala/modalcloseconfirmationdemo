import Confirmation from '../components/Confirmation';
import { createConfirmation } from 'react-confirm';

const defaultConfirmation = createConfirmation(Confirmation);

export function confirm(confirmation, options = {}) {
  console.log("calling confirm !" + confirmation);
  return defaultConfirmation({ confirmation, ...options });
}
