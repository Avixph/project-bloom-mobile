import { configureStore } from "@reduxjs/toolkit";
import randomReducer from "./randomJobSlice";


export default configureStore({
  reducer: {
    randoms: randomReducer,
    
  },
});
