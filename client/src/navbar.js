import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
} from 'react-bootstrap';

export default class navbar extends React.Component {
  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Image Gallery</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              <i className="fa fa-plus" aria-hidden="true"></i> Add Image
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}