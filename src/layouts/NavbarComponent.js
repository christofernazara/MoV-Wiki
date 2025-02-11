import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

import { BsSearch } from "react-icons/bs";
import "../styles/layouts/NavbarStyled.css";

function NavbarComponent({ setIsLogin }) {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="sticky">
      <Container fluid>
        <Navbar.Brand className="navlogo" onClick={() => navigate("/")}>
          MoV-Wiki
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link onClick={() => navigate("/about")}>About</Nav.Link>
            <Nav.Link onClick={() => navigate("/movie")}>Movie</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              className="me-2"
              aria-label="Search"
              placeholder="Search"
            />
            <Button>
              <BsSearch />
            </Button>
          </Form>
          <button
            className="logout-button"
            onClick={() => {
              setIsLogin(() => false)

            }}
          >
            Log Out
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
