import React, { Component } from 'react';
import UserActions from '../actions/UserActions'

export default class UserWelcome extends Component {

sayHi(profile) {
  UserActions.edit(profile);
}
  render() {
    let { profile } = this.props;

    if(!profile) {
      return <p className="navbar-text"></p>
    }

    return (
      <div>
      <p className="navbar-text">Welcome {profile.username}!</p>
      <button onClick={this.sayHi} className="navbar-text btn-link">edit account</button>
      </div>
    )
  }
}
