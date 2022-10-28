import React from 'react';
import Statistics from './Statistics/Statistics';


class App extends React.Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0
  }

  handleGood = () => { 
      this.setState(prevState => ({
          good: prevState.good + 1,
      }));
  };

  handleNeutral = () => { 
      this.setState(prevState => ({
          neutral: prevState.neutral + 1,
      }));
  };

  handleBad = () => { 
      this.setState(prevState => ({
        
          bad: prevState.bad + 1,
      }));
  };

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
      <div>
          <button type="button" onClick={this.handleGood}>Good</button>
          <button type="button" onClick={this.handleNeutral}>Neutral</button>
          <button type="button" onClick={this.handleBad}>Bad</button>
      </div>
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
