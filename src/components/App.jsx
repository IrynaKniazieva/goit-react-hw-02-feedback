import React from 'react';


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
      <div>
          <h2>Statistics</h2>
          <ul>
              <li>Good: {this.state.good}</li>
              <li>Neutral: {this.state.neutral}</li>
              <li>Bad: {this.state.bad}</li>
              <li>Total:{this.countTotalFeedback(this.state)}</li>
              <li>Positive feedback:{this.countPositiveFeedbackPercentage(this.state)}%</li>
          </ul>
      </div>
  </div>
  }
}


export default App;
