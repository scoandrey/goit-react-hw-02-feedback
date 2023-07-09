import React, { Component } from 'react';

class Section extends Component {
  render() {
    return (
      <>
        <h3>{this.props.title}</h3>
        {this.props.children}
      </>
    );
  }
}

export default Section;
