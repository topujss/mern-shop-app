import { advanceTodoTypes } from './actionTypes';
import { initVal } from './initValue';

const { TODO, DATE, TIME, ORDER, FRI, SAT, SUN, MON, TUE, WED, THU } = advanceTodoTypes;

// create todo reducer
const todoReducer = (state = initVal, { type, payload }) => {
  switch (type) {
    case TODO:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

// export me
export default todoReducer;
