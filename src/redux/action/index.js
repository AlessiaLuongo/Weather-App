export const GET_THE_WEATHER = "GET_THE_WEATHER";

export const fetchWeather = (cityName) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=f592bb1f055a6a224e93a8020d397bbb&lang={it}&units=metric`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch({
          type: GET_THE_WEATHER,
          payload: { data },
        });
      } else {
        throw new Error("Seems there are some Server Problems");
      }
    } catch (error) {
      console.error("Error fetching weather data: ", error);
    }
  };
};
