import { ON_CONFIRM } from '../actions';

const INITIAL_STATE = {modalActive: true};
export default function(state = INITIAL_STATE, action) {
  console.log(action);
  switch (action.type) {
    case ON_CONFIRM:
      return { ...state, modalActive: action.payload };
  }

  return state;
}
