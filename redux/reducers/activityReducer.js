import {
  ADD_ACTIVITY,
  DELETE_ACTIVITY,
  SET_ACTIVE_ACTIVITY,
} from "../actions/types";
import { v4 as uuid } from "uuid";

const initialState = {
  activities: [
    {
      id: uuid(),
      title: "Riva Zadar",
      type: "Company",
      author: "Hrvatska",
      date: "03/03/2022",
      time: "22:00",
      description:
        "Vidjeli smo vaše vožnje i željeli bismo da nastupate kod nas.",
      price: "1,000 HRK",
      startDay: 3,
      endDay: 4,
      startMonth: 4,
      startMonth: 4,
      startYear: 2022,
      endYear: 2022,
    },
    {
      id: uuid(),
      title: "Aqua Club",
      type: "Company",
      author: "Biograd na Moru, Hrvatska",
      date: "07/03/2022",
      time: "17:00",
      description: "Želimo da dođete kod nas voziti 07.10",
      price: "650 HRK",
      startDay: 7,
      endDay: 8,
      startMonth: 4,
      startMonth: 4,
      startYear: 2022,
      endYear: 2022,
    },
    {
      id: uuid(),
      title: "Rijeka Luka 2",
      type: "Company",
      author: "Hrvatska",
      date: "14/03/2022",
      time: "19:00",
      description:
        "Poštovani, vaše prethodne vožnje su nas zadivili te bismo željeli surađivati sa vama.",
      price: "800 HRK",
      startDay: 14,
      endDay: 17,
      startMonth: 3,
      startMonth: 3,
      startYear: 2022,
      endYear: 2022,
    },
    {
      id: uuid(),
      title: "Aerodrom Zemunik",
      type: "Company",
      author: "Hrvatska",
      date: "12/03/2022",
      time: "21:00",
      description: "Želimo da dođete kod nas voziti 1.10.",
      price: "750 HRK",
      startDay: 12,
      endDay: 13,
      startMonth: 3,
      startMonth: 3,
      startYear: 2022,
      endYear: 2022,
    },
    {
      id: uuid(),
      title: "Marin Juršić",
      type: "User",
      author: "Hrvatska",
      date: "12/03/2022",
      time: "21:00",
      description: "Volio bih voziti kod vas sutra.",
      price: "200 HRK",
      startDay: 15,
      endDay: 18,
      startMonth: 3,
      startMonth: 3,
      startYear: 2022,
      endYear: 2022,
    },
    {
      id: uuid(),
      title: "Roko Dukić",
      type: "User",
      author: "Hrvatska",
      date: "12/03/2022",
      time: "21:00",
      description: "Volio bih voziti kod vas sutra.",
      price: "750 HRK",
      startDay: 3,
      endDay: 4,
      startMonth: 4,
      startMonth: 4,
      startYear: 2022,
      endYear: 2022,
    },
    {
      id: uuid(),
      title: "Mihael Barić",
      type: "User",
      author: "Hrvatska",
      date: "12/03/2022",
      time: "21:00",
      description: "Volio bih voziti kod vas sutra.",
      price: "600 HRK",
      startDay: 25,
      endDay: 26,
      startMonth: 3,
      startMonth: 3,
      startYear: 2022,
      endYear: 2022,
    },
    {
      id: uuid(),
      title: "Francesco Marko Livaić",
      type: "User",
      author: "Hrvatska",
      date: "12/03/2022",
      time: "21:00",
      description: "Volio bih voziti kod vas sutra.",
      price: "550 HRK",
      startDay: 12,
      endDay: 13,
      startMonth: 3,
      startMonth: 3,
      startYear: 2022,
      endYear: 2022,
    },
  ],
  activeActivity: null,
};

export default function activityReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ACTIVITY:
      return {
        ...state,
        activites: [...state.activities, action.payload],
      };

    case DELETE_ACTIVITY:
      return {
        ...state,
        activities: state.activities.filter(
          (activity) => activity.id !== action.payload
        ),
      };

    case SET_ACTIVE_ACTIVITY:
      return {
        ...state,
        activeActivity: action.payload,
      };

    default:
      return state;
  }
}
