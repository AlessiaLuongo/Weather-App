import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { fetchWeather } from "../redux/action";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import SingleDay from "./SingleDay";
import { Alert } from "react-bootstrap";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [cityName, setCityName] = useState("");

  const handleInputChange = (e) => {
    setCityName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchWeather(cityName));
  };

  const listOfDays = useSelector((state) => state.data);

  return (
    <Container>
      <Row className="justify-content-center align-content-center">
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
        {listOfDays && listOfDays.length > 0 ? (
          listOfDays.map((day, i) => <SingleDay key={i} day={day} />)
        ) : (
          <Alert>No City found</Alert>
        )}
      </Row>
    </Container>
  );
};
export default SearchBar;
