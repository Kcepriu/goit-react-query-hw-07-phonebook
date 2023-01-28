import { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

class App extends Component {
  buttonsFeedback = ['good', 'neutral', 'bad'];

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendlerClick = typeButtom => {
    this.setState(prevState => ({ [typeButtom]: prevState[typeButtom] + 1 }));
  };

  render() {
    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.buttonsFeedback}
            onLeaveFeedback={this.hendlerClick}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            goodValue={this.state.good}
            neutralValue={this.state.neutral}
            badValue={this.state.bad}
          />
        </Section>
      </div>
    );
  }
}

export default App;
