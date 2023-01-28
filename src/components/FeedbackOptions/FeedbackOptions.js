import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="Feedback">
      <div className="Feedback__controls">
        {options.map(typeButton => {
          return (
            <button
              key={typeButton}
              type="button"
              onClick={() => onLeaveFeedback(typeButton)}
            >
              {typeButton}
            </button>
          );
        })}
      </div>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
