import PropTypes from 'prop-types';

const ResultStatistics = ({
  goodValue,
  neutralValue,
  badValue,
  totalResult,
  positiveResult,
}) => {
  return (
    <ul>
      <li key="good" className="Statistics__result">
        Good: {goodValue}
      </li>
      <li key="neutral" className="Statistics__result">
        Neutral: {neutralValue}
      </li>
      <li key="bad" className="Statistics__result">
        Bad: {badValue}
      </li>
      <li key="total" className="Statistics__result">
        Total: {totalResult}
      </li>
      <li key="total_positiva" className="Statistics__result">
        Possitive feedback: {positiveResult}%
      </li>
    </ul>
  );
};

ResultStatistics.propType = {
  goodValue: PropTypes.number.isRequired,
  neutralValue: PropTypes.number.isRequired,
  badValue: PropTypes.number.isRequired,
  totalResult: PropTypes.number.isRequired,
  positiveResult: PropTypes.number.isRequired,
};

export default ResultStatistics;
