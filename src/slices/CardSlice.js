import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  cards: [
    {
      id: 1,
      title: "first card",
      description: "this is my first card",
      date: "27/03/2025",
      listName: "first list",
    },
  ],
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addcard: (state, action) => {
      const card = {
        id: nanoid(),
        title: action.payload.title,
        description: action.payload.description,
        date: action.payload.date,
        listName: action.payload.listName,
      };
      state.push(card);
    },
    deletecard: (state, action) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload.id);
    },
    editcard: (state, action) => {
      const card = state.cards.find((card) => card.id === action.payload.id);
      card.title = action.payload.title ? action.payload.title : card.title;
      card.description = action.payload.description
        ? action.payload.description
        : card.description;
      card.date = action.payload.date ? action.payload.date : card.date;
      card.listName = action.payload.listName
        ? action.payllistName
        : card.listName;
    },
  },
});

export const { addcard, deletecard, editcard } = cardSlice.actions;
export default cardSlice.reducer;
