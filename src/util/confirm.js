import ConfirmationTwo from '../components/ConfirmationTwo';
import { createConfirmation } from 'react-confirm';

const defaultConfirmation = createConfirmation(ConfirmationTwo);

export function confirm(confirmation, options = {}) {
  return defaultConfirmation({ confirmation, ...options });
}
