import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '../components/Header.css'
import Button from 'react-bootstrap/Button';



const Header = () => {
  return (
   
          <Navbar expand="lg" className= "head pt-3">
            <Container>
              <Navbar.Brand href="#home" className='logo'>FastFood Restaurant</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav">
                  <Nav.Link className='link' href="#home">Home</Nav.Link>
                  <Nav.Link className='link' href="#about">About</Nav.Link>
                  <Nav.Link className='link'href="#services">Services</Nav.Link>
                  <Nav.Link className='link' href="#contact">Contact</Nav.Link>
                  <Button variant="outline-primary"className='btn'>SignUp</Button>{' '}
                  <Button variant="outline-light"className='btn'>Login</Button>{' '}
                   <DropdownButton id="dropdown-basic-button" title="Menu List" className="drop">
      <Dropdown.Item href="#/action-1"className="down">1.Fried Chicken</Dropdown.Item>
      <Dropdown.Item href="#/action-2"className="down">2.Broawdway Pizza</Dropdown.Item>
      <Dropdown.Item href="#/action-3"className="down">3.Drinks</Dropdown.Item>
      <Dropdown.Item href="#/action-3"className="down">4.Chicken roll</Dropdown.Item>
      <Dropdown.Item href="#/action-3"className="down">5.Nuggets</Dropdown.Item>
    </DropdownButton>
                   {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;