import React, { Component } from 'react';
import UserActions from '../actions/UserActions'

export default class LoginForm extends Component {

  render() {
    // let { username, password } = this.state;

    return (
      <div>
      <h1>Edit Profile Information</h1>
        <form onSubmit={this._submit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" placeholder="Name" data-statekey='name' />
          </div>
          <div className="form-group">
            <label>Biography</label>
            <input type="text" className="form-control" placeholder="Biography" data-statekey='biography'/>
          </div>
          <div className="form-group">
            <label>Image</label>
            <input type="text" className="form-control" placeholder="IMG url" data-statekey='image'/>
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>
    )
  }
}
