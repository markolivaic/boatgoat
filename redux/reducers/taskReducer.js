import { ADD_TASK, DELETE_TASK, SET_ACTIVE_TASK } from "../actions/types";
import { v4 as uuid } from "uuid";

const initialState = {
  tasks: [
    {
      id: uuid(),
      title: "Installed flooring",
      author: "Jane Doe",
      date: Date.now(),
      description: "A description of one task that was done today",
    },
    {
      id: uuid(),
      title: "Installed flooring",
      author: "John Smith",
      date: Date.now(),
      description: "A description of one task that was done today",
    },
    {
      id: uuid(),
      title: "Installed flooring",
      author: "Donald Kellam",
      date: Date.now(),
      description: "A description of one task that was done danas",
    },
    {
      id: uuid(),
      title: "Installed flooring",
      author: "Donald Kellam",
      date: Date.now(),
      description: "A description of one task that was done danas",
    },
  ],
  activeTask: null,
};

export default function activityReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case SET_ACTIVE_TASK:
      return {
        ...state,
        activeTask: action.payload,
      };

    default:
      return state;
  }
}
