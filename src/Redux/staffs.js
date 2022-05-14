import * as ActionTypes from "./actionType";

export const Staffs = (
  state = {
    staffs: [],
    staffsSalary: [],
    staffsByDepartment: []
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_STAFFS: {
      return { ...state, staffs: action.payload };
    }
    case ActionTypes.ADD_STAFFSSALARY: {
      return { ...state, staffsSalary: action.payload };
    }
    case ActionTypes.ADD_STAFFS_BY_DEPARTMENT: {
      return { ...state, staffsByDepartment: action.payload };
    }

    default:
      return state;
  }
};
