import React, { Component } from 'react';
import styled from 'styled-components';

const ButtonsLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
font-size: 30px;
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

class FeedbackOptions extends Component {
  render() {
    const { options } = this.props;
    return (
      <ButtonsLayout>
        {options.map(button => (
          <Button key = {button.id} onClick={button.onClick}>{button.name}</Button>
        ))}
      </ButtonsLayout>
    );
  }
}

export default FeedbackOptions;
