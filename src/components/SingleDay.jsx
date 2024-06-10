import { Card, Col, ListGroup } from "react-bootstrap";

const SingleDay = () => {
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>
            {}
            {}
          </Card.Title>
          <Card.Text>{}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">More infos</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleDay;
