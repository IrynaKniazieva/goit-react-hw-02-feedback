import React from 'react';

    
const FeedbackOptions = ({onLeaveFeedback}) => (
    <div>
            <button type="button" onClick={onLeaveFeedback}>G</button>
            <button type="button" onClick={onLeaveFeedback}>N</button>
            <button type="button" onClick={onLeaveFeedback}>B</button>
       
    </div>
)

export default FeedbackOptions



