import React from 'react';

class Statistics extends React.Component {
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
            </ul>
        </div>
    </div>
    }
}


export default Statistics;