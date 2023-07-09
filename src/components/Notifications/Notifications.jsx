import React, { Component } from 'react';

class Notification extends Component {
  render() {
    return <span>{this.props.message}</span>;
  }
}

export default Notification;
