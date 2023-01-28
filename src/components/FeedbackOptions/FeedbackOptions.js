import PropTypes from 'prop-types';
import { Controls, ButtomControl } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="Feedback">
      <Controls className="Feedback__controls">
        {options.map(typeButton => {
          return (
            <ButtomControl
              key={typeButton}
              type="button"
              onClick={() => onLeaveFeedback(typeButton)}
            >
              {typeButton}
            </ButtomControl>
          );
        })}
      </Controls>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
