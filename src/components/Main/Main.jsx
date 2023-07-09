import React, { Component } from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';

class Main extends Component {
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
    return this.countTotalFeedback() === 0
      ? 0
      : Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={[
              { id: 1, name: 'Good', onClick: this.goodClick },
              { id: 2, name: 'Neutral', onClick: this.neutralClick },
              { id: 3, name: 'Bad', onClick: this.badClick },
            ]}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}

export default Main;
