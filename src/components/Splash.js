import React, { Component } from 'react';
import UserStore from '../stores/UserStore';
import UserActions from '../actions/UserActions';

export default class Splash extends Component {
  render() {
    let { profile } = this.props;

    if (!profile) {
      return <p></p>
    }

    return (
      <h1>
        Welcome {profile.username}
      </h1>
    )
  }
}
