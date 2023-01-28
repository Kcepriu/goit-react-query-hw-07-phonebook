import React, { Component } from 'react';
import Statistics from 'components/Statistics';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendlerClickGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  hendlerClickNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  hendlerClickBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  render() {
    return (
      <div className="Feedback">
        <div className="Feedback__controls">
          <button type="button" onClick={this.hendlerClickGood}>
            Good
          </button>
          <button type="button" onClick={this.hendlerClickNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.hendlerClickBad}>
            Bad
          </button>
        </div>
        <Statistics
          goodValue={this.state.good}
          neutralValue={this.state.neutral}
          badValue={this.state.bad}
        />
      </div>
    );
  }
}

export default Feedback;
