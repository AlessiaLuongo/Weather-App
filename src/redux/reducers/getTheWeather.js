import { GET_THE_WEATHER } from "../action";

const initialState = {
  content: [],
};

const getTheWeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_THE_WEATHER:
      return {
        ...state,
        content: action.payload.data,
      };
    default:
      return state;
  }
};

export default getTheWeatherReducer;
