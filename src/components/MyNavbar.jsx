import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container fluid className="mb-5">
        <Navbar.Brand href="#">WTW - What&#39;s the Weather?</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
