import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CgDarkMode } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import UserContext from "../../context/UserContext";
import { DarkThemeButton } from "./styledComponents";
import "./index.css";

const Header = (props) => {
  const navigate = useNavigate();
  const jwtToken = Cookies.get("jwt_token");

  if (jwtToken === undefined) {
    navigate("/login", { replace: true });
  }

  const onClickLogout = () => {
    Cookies.remove("jwt_token");
    navigate("/login", { replace: true });
  };

  return (
    <UserContext.Consumer>
      {(value) => {
        const { isDark, changeDarkTheme } = value;

        const navbarBgStyle = isDark ? "nav-bar-dark" : "nav-bar-white";
        return (
          <>
            <Navbar expand="lg" className={navbarBgStyle} sticky="top">
              <Container fluid>
                <Navbar.Brand href="/">
                  <img
                    src="http://smsc2.tesync.net/assets/images/tesync.png"
                    alt="tesync logo"
                  />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                  >
                    <Nav.Link href="/" className="text-danger fs-5 mx-3">
                      Home
                    </Nav.Link>
                    <Nav.Link
                      href="/ClientSummary"
                      className="text-danger fs-5 mx-3"
                    >
                      ClientSummary
                    </Nav.Link>
                    <NavDropdown
                      title="On Net/Off Net"
                      id="navbarScrollingDropdown"
                      className="text-danger fs-5"
                    >
                      <NavDropdown.Item
                        href="#action3"
                        className="text-danger fs-5"
                      >
                        Error 0
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action4"
                        className="text-danger fs-5"
                      >
                        Error 253
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item
                        href="#action5"
                        className="text-danger fs-5"
                      >
                        Error (0+253)
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link
                      href="#"
                      disabled
                      className="text-danger fs-5 mx-3"
                    >
                      UUID
                    </Nav.Link>
                    <Nav.Link
                      href="#"
                      disabled
                      className="text-danger fs-5 mx-3"
                    >
                      MSISDN
                    </Nav.Link>
                    <Nav.Link
                      href="#"
                      disabled
                      className="text-danger fs-5 mx-3"
                    >
                      Sender ID
                    </Nav.Link>
                    <Nav.Link
                      href="#"
                      disabled
                      className="text-danger fs-5 mx-3"
                    >
                      UUID
                    </Nav.Link>
                  </Nav>
                  <Nav className="d-flex align-items-center">
                    <img
                      src="https://smsc.tesync.net/assets/images/bsnl.png"
                      alt="bsnl"
                      className="bsnl-image"
                    />
                    <DarkThemeButton
                      isdarktheme={isDark}
                      hover="true"
                      type="button"
                      className="mr-5"
                      onClick={changeDarkTheme}
                    >
                      <CgDarkMode className="dark-theme-image" />
                    </DarkThemeButton>
                    <Button
                      variant="outline-primary"
                      onClick={onClickLogout}
                      className="ms-3"
                    >
                      Logout
                    </Button>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <Outlet />
          </>
        );
      }}
    </UserContext.Consumer>
  );
};

export default Header;
