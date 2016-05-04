import React, { PropTypes } from 'react';
import {
  Navbar,
  Nav,
  NavItem,
} from 'react-bootstrap';
import { branch } from 'baobab-react/higher-order';

import * as actions from './actions';

class navbar extends React.Component {
  constructor() {
    super();

    this.addImage = this.addImage.bind(this);
  }

  addImage() {
    this.props.dispatch(
      actions.showAddImageModel,
      true
    );
  }

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
            <NavItem eventKey={1} onClick={this.addImage}>
              <i className="fa fa-plus" aria-hidden="true"></i> Add Image
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

navbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default branch({
  isAddingImage: ['isAddingImage'],
}, navbar);
