import PropTypes from 'prop-types';
import ResultStatistics from './ResultStatistics/ResultStatistics';
import Notification from 'components/Notification';

const Statistics = ({ goodValue, neutralValue, badValue }) => {
  const totalResult = goodValue + neutralValue + badValue;

  const positiveResult = totalResult
    ? Math.round((goodValue / totalResult) * 100)
    : 0;

  return (
    <div className="Statistics">
      {totalResult ? (
        <ResultStatistics
          goodValue={goodValue}
          neutralValue={neutralValue}
          badValue={badValue}
          totalResult={totalResult}
          positiveResult={positiveResult}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};

Statistics.propTypes = {
  goodValue: PropTypes.number.isRequired,
  neutralValue: PropTypes.number.isRequired,
  badValue: PropTypes.number.isRequired,
};

export default Statistics;
