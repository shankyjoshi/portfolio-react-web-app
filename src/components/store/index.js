import { configureStore } from "@reduxjs/toolkit";
import portfolioreducer from "../Portfolio/portfolioreducer";
const store = configureStore({
  reducer: {
    portfolioreducer,
  },
});
export default store;
