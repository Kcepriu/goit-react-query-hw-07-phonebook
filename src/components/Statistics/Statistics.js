import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ResultStatistics from './ResultStatistics/ResultStatistics';

class Statistics extends Component {
  static propTypes = {
    goodValue: PropTypes.number.isRequired,
    neutralValue: PropTypes.number.isRequired,
    badValue: PropTypes.number.isRequired,
  };

  render() {
    const totalResult =
      this.props.goodValue + this.props.neutralValue + this.props.badValue;

    const positiveResult = totalResult
      ? Math.round((this.props.goodValue / totalResult) * 100)
      : 0;

    return (
      <div className="Statistics">
        {totalResult ? (
          <ResultStatistics
            goodValue={this.props.goodValue}
            neutralValue={this.props.neutralValue}
            badValue={this.props.badValue}
            totalResult={totalResult}
            positiveResult={positiveResult}
          />
        ) : (
          <p>There is no feedback</p>
        )}
      </div>
    );
  }
}

export default Statistics;
