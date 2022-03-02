import {
  ADD_ACTIVITIY,
  DELETE_ACTIVITY,
  SET_ACTIVE_ACTIVITY,
} from "../actions/types";
import { v4 as uuid } from "uuid";

export const addActivity = (activity) => (dispatch) => {
  const newActivity = {
    ...activity,
    id: uuid(),
    date: Date.now(),
  };

  dispatch({
    type: ADD_ACTIVITY,
    payload: newActivity,
  });
};

export const deleteActivity = (id) => {
  return {
    type: DELETE_ACTIVITY,
    payload: id,
  };
};

export const setActiveActivity = (activity) => {
  return {
    type: SET_ACTIVE_ACTIVITY,
    payload: activity,
  };
};
