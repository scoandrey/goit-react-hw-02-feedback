import React, { Component } from 'react';
import Notification from 'components/Notifications/Notifications';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return total() === 0 ? (
      <Notification message="There is no feedback" />
    ) : (
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total()}</p>
        <p>Positive feedback: {positivePercentage()}%</p>
      </div>
    );
  }
}

export default Statistics;
