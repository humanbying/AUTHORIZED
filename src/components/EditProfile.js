import React, { Component } from 'react';
import UserActions from '../actions/UserActions'
import UserStore from '../stores/UserStore';
import { Modal, Button } from 'react-bootstrap';

export default class EditProfile extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      occupation: '',
      image: ''
    }

    this._openModal = this._openModal.bind(this);
    this._closeModal = this._closeModal.bind(this);
    this._saveChanges = this._saveChanges.bind(this);
    this._onInputChange = this._onInputChange.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
  UserStore.startListening(this._onChange);
  }

  componentWillUnmount() {
  UserStore.stopListening(this._onChange);
  }

  _onChange() {
  this.setState({
    name: this.props.profile.name,
    occupation: this.props.profile.occupation,
    image: this.props.profile.image
  })
}

  _onInputChange(e) {
    // console.log("state of EditProfile:", this.state)
    let key = e.target.dataset.statekey;
    let value = e.target.value;

    this.setState({
      [key]: value
    });
  }

  _openModal(e) {
  e.preventDefault();
  this.setState({showModal: true});
}

_closeModal(e) {
  e.preventDefault();
  this.setState({showModal: false});
}

_saveChanges(e) {
  //e.preventDefault();
  let { name, occupation, image } = this.state;

  let updatedUser = {
    name,
    occupation,
    image
  };

  UserActions.editProfile(updatedUser);

  this.setState({showModal: false});
  }

  // dhilip() {
  //   // this.setState({name: "", occupation: "", image: ""})
  // }

  render() {
    let { name, occupation, image } = this.state;

    return (
      <div>
          <button className="btn btn-warning btn-sm" onClick={this._openModal}><b>Edit</b></button>

          <Modal show={this.state.showModal} onHide={this._closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Edit User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form onSubmit={this._saveChanges}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder={this.props.profile.name}
                required
                value={name}
                data-statekey='name'
                onChange={this._onInputChange}/>
            </div>
            <div className="form-group">
              <label>occupation</label>
              <input
                type="text"
                className="form-control"
                placeholder={this.props.profile.occupation}
                required
                value={occupation}
                data-statekey='occupation'
                onChange={this._onInputChange}/>
            </div>
            <div className="form-group">
              <label>Image</label>
              <input
                type="text"
                className="form-control"
                placeholder={this.props.profile.image}
                required
                value={image}
                data-statekey='image'
                onChange={this._onInputChange}/>
            </div>
            </form>
            </Modal.Body>
            <Modal.Footer>
              <Button className="btn btn-success" onClick={this._saveChanges}>Save</Button>
              <Button onClick={this._closeModal}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      )
    }
  }
