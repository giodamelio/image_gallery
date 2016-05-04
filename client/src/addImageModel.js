import React, { PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { branch } from 'baobab-react/higher-order';

import * as actions from './actions';

class AddImageModel extends React.Component {
  constructor() {
    super();

    this.close = this.close.bind(this);
  }

  close() {
    this.props.dispatch(
      actions.showAddImageModel,
      false
    );
  }

  render() {
    return (
      <Modal show={this.props.isAddingImage} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Text in a modal</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

AddImageModel.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAddingImage: PropTypes.bool.isRequired,
};

export default branch({
  isAddingImage: ['isAddingImage'],
}, AddImageModel);
