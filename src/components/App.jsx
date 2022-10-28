import React from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';




class App extends React.Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0
  }

  handleClick = button => {
    let key = button.target.textContent.toLowerCase();
    this.setState( state=>({ [key]: state[key] + 1 }));
  };


  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + neutral + bad;
  }
  
  countPositiveFeedbackPercentage = () => {
    const {good} = this.state;
    const totalFeedback = this.countTotalFeedback(this.state)
    return Math.round(good/totalFeedback * 100)
  }

  render () {
      const { good, neutral, bad } = this.state;

     

      return <div>
      <Section
      title = "Please leave feedback">
      
      <FeedbackOptions 
      onLeaveFeedback = {this.handleClick} />
      </Section>
  
      <Statistics
      good = {good}
      neutral = {neutral}
      bad = {bad}
      total = {this.countTotalFeedback(this.state)}
      positivePercentage = {this.countPositiveFeedbackPercentage(this.state)}/>
  </div>
  }
}


export default App;

