import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";

const Information = ({ day }) => {
  const dateFormatter = (date) => {
    const formattedDate = new Date(date).toISOString().slice(11, 16);
    return formattedDate;
  };

  const temperatureFormatter = (temp) => {
    return Math.round(temp);
  };

  return (
    <>
      <Col
        xs={10}
        sm={5}
        md={5}
        lg={3}
        className="list-items p-2 d-flex justify-content-center align-content-center"
      >
        <ListGroup className="text-center d-flex align-items-center align-content-center">
          <ListGroupItem>
            <i className="bi bi-clock mx-1"></i>
            {dateFormatter(day.dt_txt)}
          </ListGroupItem>
          <ListGroup.Item>
            {temperatureFormatter(day.main.temp_min)}°C -{" "}
            {temperatureFormatter(day.main.temp_max)}°C
          </ListGroup.Item>
          <img
            src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
            alt="weather-icon"
            height="120px"
            width="120px"
          />
        </ListGroup>
      </Col>
    </>
  );
};

export default Information;
