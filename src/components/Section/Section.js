import PropTypes from 'prop-types';
import { Container, TitleSection } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Container>
      <TitleSection className="Section__title">{title}</TitleSection>
      {children}
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
