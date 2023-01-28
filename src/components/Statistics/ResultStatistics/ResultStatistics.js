import PropTypes from 'prop-types';
import { ListStatistics, ValueStatistic } from './ResultStatistics.styled';

const ResultStatistics = ({
  goodValue,
  neutralValue,
  badValue,
  totalResult,
  positiveResult,
}) => {
  return (
    <ListStatistics>
      <li key="good" className="Statistics__result">
        Good: <ValueStatistic>{goodValue}</ValueStatistic>
      </li>
      <li key="neutral" className="Statistics__result">
        Neutral: <ValueStatistic>{neutralValue}</ValueStatistic>
      </li>
      <li key="bad" className="Statistics__result">
        Bad: <ValueStatistic>{badValue}</ValueStatistic>
      </li>
      <li key="total" className="Statistics__result">
        Total: <ValueStatistic>{totalResult}</ValueStatistic>
      </li>
      <li key="total_positiva" className="Statistics__result">
        Possitive feedback: <ValueStatistic>{positiveResult}%</ValueStatistic>
      </li>
    </ListStatistics>
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
