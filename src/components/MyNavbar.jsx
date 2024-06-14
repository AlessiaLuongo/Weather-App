import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const MyNavbar = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary "
      bg="secondary"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand href="#">WTW - What&#39;s the Weather?</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
