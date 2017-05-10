import DemoOne from '../components/DemoOne'
import { createConfirmation } from 'react-confirm';

const defaultConfirmation = createConfirmation(DemoOne);

export function confirm(confirmation, options = {}) {
  return defaultConfirmation({ confirmation, ...options });
}
