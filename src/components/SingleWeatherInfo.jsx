import Modal from "react-bootstrap/Modal";

const SingleWeatherInfo = ({ show, handleClose, day }) => {
  const dateFormatterHour = (date) => {
    const formattedDate = new Date(date).toISOString().slice(11, 16);
    return formattedDate;
  };

  const whatDay = (date) => {
    let thisDay = new Date(date).toLocaleString("it-IT", { weekday: "long" });
    return thisDay;
  };
  const temperatureFormatter = (temp) => {
    return Math.round(temp);
  };

  const firstLetterUpperCase = (stringa) => {
    return stringa.charAt(0).toUpperCase() + stringa.toLowerCase().slice(1);
  };

  return (
    <Modal show={show} onHide={handleClose} className=" text-center">
      <Modal.Header className="modale text-center" closeButton></Modal.Header>
      <Modal.Body className="modale-body">
        <p id="ora-precisa">
          {firstLetterUpperCase(whatDay(day.dt_txt))}
          {" - "}
          {dateFormatterHour(day.dt_txt)}
          <i className="bi bi-clock mx-1"></i>
        </p>
        <p>
          {firstLetterUpperCase(day.weather[0].description)}
          <img
            src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
            alt="weather-icon"
          />
        </p>

        <p>
          Min {temperatureFormatter(day.main.temp_min)}°C - Max{" "}
          {temperatureFormatter(day.main.temp_max)}°C{" "}
        </p>
        <p>Percepiti : {day.main.feels_like} °C</p>
        <p>Umidità : {day.main.humidity}%</p>
      </Modal.Body>
    </Modal>
  );
};

export default SingleWeatherInfo;
