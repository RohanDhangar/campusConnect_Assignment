import { configureStore } from "@reduxjs/toolkit";
import { cardSlice } from "../slices/CardSlice";
import { listSlice } from "../slices/ListSlice";

export const store = configureStore({
  reducer: {
    cards: cardSlice.reducer,
    lists: listSlice.reducer,
  },
});
