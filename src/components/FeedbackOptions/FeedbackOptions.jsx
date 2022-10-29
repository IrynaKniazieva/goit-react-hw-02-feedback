import React from 'react';

    
const FeedbackOptions = ({ onLeaveFeedback, options }) => (
    <>
    {options.map((option) => (
        <button key={option} type="button" onClick={onLeaveFeedback}>
        {option}
      </button>
    )) }
    </>

);

export default FeedbackOptions



