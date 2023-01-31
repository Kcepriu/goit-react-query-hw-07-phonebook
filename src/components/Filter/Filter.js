import PropTypes from 'prop-types';
import { TitleFilter, InputFilter } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <TitleFilter>Find contact by name</TitleFilter>
      <InputFilter
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

Filter.propType = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default Filter;
