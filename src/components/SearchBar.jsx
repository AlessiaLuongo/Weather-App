import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { fetchWeather } from "../redux/action";
import Information from "./Information";
import { Card, CardTitle } from "react-bootstrap";

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

  const listOfCity = useSelector((state) => state.getTheWeather.city);

  const uniqueDates = Array.from(
    new Set(listOfDays.map((item) => dateFormatter(item.dt_txt)))
  );

  return (
    <>
      <Container fluid>
        <Row className="justify-content-center align-content-center mt-5">
          <Col xs={12} sm={12} md={6} lg={6}>
            <Form className="d-flex" onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={cityName}
                onChange={handleInputChange}
              />
              <Button variant="outline-dark" type="submit">
                Search
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            {listOfDays &&
              listOfDays.length > 0 &&
              uniqueDates.map((date, index) => (
                <Card key={index} id="card">
                  <hr />
                  <CardTitle className="card-title text-center p-2">
                    {listOfCity.name} {listOfCity.country} - {date}
                  </CardTitle>
                  <Card.Body className="card-body d-flex flex-wrap justify-content-center align-content-center">
                    {listOfDays

                      .filter((day) => dateFormatter(day.dt_txt) === date)
                      .map((day, i) => (
                        <Information key={i} day={day} />
                      ))}
                  </Card.Body>
                </Card>
              ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SearchBar;
