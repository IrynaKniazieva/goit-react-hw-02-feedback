import React from 'react';

    
const FeedbackOptions = ({ onLeaveFeedback }) => (
    <>
      <button type="button" onClick={onLeaveFeedback}>
        Good
      </button>
      <button type="button" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button type="button" onClick={onLeaveFeedback}>
        Bad
      </button>
    </>

);

export default FeedbackOptions



