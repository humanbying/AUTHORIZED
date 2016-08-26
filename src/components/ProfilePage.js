import React, { Component } from 'react';
import UserStore from '../stores/UserStore';
import Loading from 'react-loading-bar';
// import 'react-loading-bar/dist/index.css';

import EditProfile from './EditProfile';

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: UserStore.get()
    }

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
      profile: UserStore.get()
    })
  }
//lalalalala
  render() {
      return (
        <div className="container">
          <h1>{this.state.profile.name}</h1>
          <img src={this.state.profile.image} width="200px" />
          <h3>occupation: {this.state.profile.occupation}</h3>
          <EditProfile profile={this.state.profile}/>
        </div>
      )
    }
}
