import { v4 as uuid } from "uuid";

const initialState = {
  reviews: [
    {
      type: "Company",
      id: uuid(),
      author: "Ivan",
      starCount: "5",
      date: "17.02.2022",
      time: "15:00",
      location: "Hrvatska",
      review:
        "Odlično vozi te dobro komunicira. Ugodna atmosfera u vozilu.",
    },
    {
      type: "Company",
      id: uuid(),
      author: "Marko",
      starCount: "4",
      date: "15.02.2022",
      time: "15:00",
      location: "Hrvatska",
      review: "Vožnja veoma dobra, dobar omjer cijene i kvalitete.",
    },
    {
      type: "Company",
      id: uuid(),
      author: "Roko",
      starCount: "2",
      date: "03.02.2022",
      time: "15:00",
      location: "Hrvatska",
      review: "Najgori vozač u gradu.",
    },
    {
      type: "User",
      id: uuid(),
      author: "Francesco Marko Livaić",
      starCount: "1",
      date: "04.02.2022",
      time: "19:00",
      location: "Hrvatska",
      review: "Veoma loš klijent, ne bi se više nikad trebao voziti brodom.",
    },
    {
      type: "User",
      id: uuid(),
      author: "Antonio Brkić",
      starCount: "4",
      date: "19.02.2022",
      time: "15:00",
      location: "Hrvatska",
      review: "Ugodan putnik.",
    },
    {
      type: "User",
      id: uuid(),
      author: "Roko Dukić",
      starCount: "5",
      date: "24.02.2022",
      time: "14:00",
      location: "Hrvatska",
      review: "Vrhunski klijent.",
    },
  ],
};

export default function reviewReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
