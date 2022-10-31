import React from 'react';
import styles from "./FeedbackOptions.module.css"

    
const FeedbackOptions = ({ onLeaveFeedback, options }) => (
    <>
    {options.map((option) => (
        <button className={styles.button} key={option} type="button" onClick={onLeaveFeedback}>
        {option}
      </button>
    )) }
    </>

);

export default FeedbackOptions



