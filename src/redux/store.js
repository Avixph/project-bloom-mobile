import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchJobSlice";
import randomReducer from "./randomJobSlice";


export default configureStore({
  reducer: {
    searches: searchReducer,
    randoms: randomReducer,
  },
});
