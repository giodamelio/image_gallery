import React, { PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { branch } from 'baobab-react/higher-order';

import * as actions from './actions';

class AddImageModel extends React.Component {
  constructor() {
    super();

    this.close = this.close.bind(this);
    this.addImage = this.addImage.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);

    this.state = {
      url: '',
      description: '',
    };
  }

  // Close the model
  close() {
    this.props.dispatch(
      actions.showAddImageModel,
      false
    );
  }

  // Add an image to the gallery
  addImage() {
    this.close();

    this.props.dispatch(
      actions.addImage,
      {
        url: this.state.url,
        description: this.state.description,
      }
    );

    this.setState({
      url: '',
      description: '',
    });
  }

  // Handle the url
  handleUrlChange(event) {
    this.setState({
      url: event.target.value,
    });
  }

  // Handle the description
  handleDescriptionChange(event) {
    this.setState({
      description: event.target.value,
    });
  }

  render() {
    return (
      <Modal show={this.props.isAddingImage} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Add Image to Gallery</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="url">Image Url</label>
              <input
                type="url"
                value={this.state.url}
                onChange={this.handleUrlChange}
                className="form-control"
                id="url"
                placeholder="Url"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                value={this.state.description}
                onChange={this.handleDescriptionChange}
                className="form-control"
                id="description"
                placeholder="Description"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.addImage}>Submit</Button>
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
