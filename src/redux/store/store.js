import { configureStore, combineReducers } from "@reduxjs/toolkit";
import getTheWeatherReducer from "../reducers/getTheWeather";

const mainReducer = combineReducers({
  getTheWeather: getTheWeatherReducer,
});

const store = configureStore({
  reducer: mainReducer,
});

export default store;
