import ListGroup from "react-bootstrap/ListGroup";

const Information = ({ day }) => {
  return (
    <>
      <ListGroup>
        <ListGroup.Item> {day.description}</ListGroup.Item>
        <ListGroup.Item>
          Temp:{day.main.temp}°C Humidity:{day.main.humidity}%
        </ListGroup.Item>
        <ListGroup.Item> Wind:{day.wind.speed} m/s</ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default Information;
