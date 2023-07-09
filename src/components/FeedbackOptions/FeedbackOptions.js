import React, { Component } from 'react';
import styled from 'styled-components';

const ButtonsLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonGood = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const ButtonNeutral = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0 1em;
  padding: 0.25em 1em;
`;
const ButtonBad = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0 1em;
  padding: 0.25em 1em;
`;
class FeedbackOptions extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodClick = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  neutralClick = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  badClick = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor(this.state.good/this.countTotalFeedback()*100)
  };

  render() {
    return (
      <div>
        <ButtonsLayout>
          <ButtonGood
            onClick={this.goodClick}
          >
            Good
          </ButtonGood>
          <ButtonNeutral onClick={this.neutralClick}>Neutral</ButtonNeutral>
          <ButtonBad onClick={this.badClick}>Bad</ButtonBad>
        </ButtonsLayout>

        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
      </div>
    );
  }
}

export default FeedbackOptions;
