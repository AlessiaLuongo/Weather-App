import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import SingleWeatherInfo from "./SingleWeatherInfo";
import CardFooter from "react-bootstrap/CardFooter";

const Information = ({ day }) => {
  const dateFormatter = (date) => {
    const formattedDate = new Date(date).toISOString().slice(11, 16);
    return formattedDate;
  };

  const temperatureFormatter = (temp) => {
    return Math.round(temp);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Col
        xs={10}
        sm={5}
        md={5}
        lg={3}
        className="list-items -flex flex-column justify-content-center align-content-center"
      >
        <ListGroup className="list-group text-center d-flex align-items-center align-content-center">
          <div className="image-div">
            <img
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt="weather-icon"
              height="120px"
              width="120px"
            />
          </div>
          <ListGroupItem>
            {dateFormatter(day.dt_txt)} <i className="bi bi-clock mx-1"></i>
          </ListGroupItem>
          <ListGroup.Item>
            {temperatureFormatter(day.main.temp)}°C
          </ListGroup.Item>
        </ListGroup>
        <CardFooter className="card-footer text-center" onClick={handleShow}>
          Altre Informazioni
        </CardFooter>
      </Col>
      <SingleWeatherInfo show={show} handleClose={handleClose} day={day} />
    </>
  );
};

export default Information;
