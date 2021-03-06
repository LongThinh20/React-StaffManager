import * as ActionTypes from "./actionType";

export const Departments = (
  state = {
    departments: []
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_DEPARTMENTS: {
      return { ...state, departments: action.payload };
    }

    default:
      return state;
  }
};
