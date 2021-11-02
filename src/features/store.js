import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/movieSlice";
import searchContent from "./searchContent/search";
export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    search:searchContent
  },
});
