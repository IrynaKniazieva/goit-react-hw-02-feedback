import React from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';


class App extends React.Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0
  }

  handleButton = label=> {
    this.setState(prevState => {
        return {[label]: prevState[label] + 1};
    });
  };


//   handleGood = () => { 
//       this.setState(prevState => ({
//           good: prevState.good + 1,
//       }));
//   };

//   handleNeutral = () => { 
//       this.setState(prevState => ({
//           neutral: prevState.neutral + 1,
//       }));
//   };

//   handleBad = () => { 
//       this.setState(prevState => ({
        
//           bad: prevState.bad + 1,
//       }));
//   };

  countTotalFeedback = () => {
    // const { good, bad, neutral } = this.state;
    return this.state.good + this.state.neutral + this.state.bad;
  }
  
  countPositiveFeedbackPercentage = () => {
    return Math.round(this.state.good / this.countTotalFeedback(this.state) * 100)
}

  render () {
      return <div>
      <h1>Please leave feedback</h1>
      <FeedbackOptions 
      
      onLeaveFeedback = {this.handleButton(this.state)} />
      
      <Statistics
      good = {this.state.good}
      neutral = {this.state.neutral}
      bad = {this.state.bad}
      total = {this.countTotalFeedback(this.state)}
      positivePercentage = {this.countPositiveFeedbackPercentage(this.state)}/>
  </div>
  }
}


export default App;

