import {
  ADD_ACTIVITIY,
  DELETE_ACTIVITY,
  SET_ACTIVE_ACTIVITY,
} from "../actions/types";
import { v4 as uuid } from "uuid";

export const addTask = (task) => (dispatch) => {
  const newTask = {
    ...Task,
    id: uuid(),
    date: Date.now(),
  };

  dispatch({
    type: ADD_Task,
    payload: newTask,
  });
};

export const deleteTask = (id) => {
  return {
    type: DELETE_Task,
    payload: id,
  };
};

export const setActiveTask = (Task) => {
  return {
    type: SET_ACTIVE_Task,
    payload: activity,
  };
};
