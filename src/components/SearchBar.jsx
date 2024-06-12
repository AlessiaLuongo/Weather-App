import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { fetchWeather } from "../redux/action";
import Information from "./Information";
import { Card } from "react-bootstrap";

const SearchBar = () => {
  const dateFormatter = (date) => {
    const formattedDate = new Date(date)
      .toISOString()
      .slice(0, 10)
      .split("-")
      .reverse()
      .join("/");
    return formattedDate;
  };

  const dispatch = useDispatch();
  const [cityName, setCityName] = useState("");

  const handleInputChange = (e) => {
    setCityName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchWeather(cityName));
  };

  const listOfDays = useSelector((state) => state.getTheWeather.list);
  console.log("list of days", listOfDays);

  const uniqueDates = Array.from(
    new Set(listOfDays.map((item) => dateFormatter(item.dt_txt)))
  );

  return (
    <Container>
      <Row className="justify-content-center align-content-center my-4">
        <Col sm={12} md={8} lg={6}>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={cityName}
              onChange={handleInputChange}
            />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        {listOfDays &&
          listOfDays.length > 0 &&
          uniqueDates.map((date, index) => (
            <>
              <Col sm={12} md={8} lg={6}>
                <Card key={index}>
                  <Card.Body>
                    <Card.Title>{date}</Card.Title>
                    <Card.Text>
                      {listOfDays
                        .filter((day) => dateFormatter(day.dt_txt) === date)
                        .map((day, i) => (
                          <Information key={i} day={day} />
                        ))}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </>
          ))}
      </Row>
    </Container>
  );
};

export default SearchBar;
