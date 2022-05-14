import { createStore, applyMiddleware, combineReducers } from "redux";
import { Staffs } from "./staffs";
import { Departments } from "./departments";
import { InitialForm } from "./form";

import thunk from "redux-thunk";
import logger from "redux-logger";

import { createForms } from "react-redux-form";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      staffs: Staffs,
      departments: Departments,
      ...createForms({
        staff: InitialForm
      })
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
