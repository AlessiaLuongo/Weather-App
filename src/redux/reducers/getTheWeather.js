import { GET_THE_WEATHER } from "../action";

const initialState = {
  city: {},
  list: [],
};

const getTheWeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_THE_WEATHER:
      return {
        ...state,
        city: action.payload.city,
        list: action.payload.list,
      };

    default:
      return state;
  }
};

export default getTheWeatherReducer;
