import React from 'react';
import { ButtonsLayout, Button } from './Buttons';

const FeedbackOptions = props => {
  const { options, onLeaveFeedback } = props;

  return (
    <ButtonsLayout>
      {options.map((option, index) => (
        <Button key={index} onClick={() => onLeaveFeedback(option)}>
          {option[0].toUpperCase() + option.slice(1)}
        </Button>
      ))}
    </ButtonsLayout>
  );
};

export default FeedbackOptions;
