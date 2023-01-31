import PropTypes from 'prop-types';
import { Contact, ContactList } from './ListContacts.styled';

const ListContacts = ({ contacts, onDelete }) => {
  return (
    <>
      <ContactList>
        {contacts.map(element => {
          const { id, userName, number } = element;
          return (
            <Contact key={id} className="Statistics__result">
              {userName}: {number}
              <button type="button" name={id} onClick={onDelete}>
                Delete
              </button>
            </Contact>
          );
        })}
      </ContactList>
    </>
  );
};

ListContacts.propType = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      userName: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.is,
};

export default ListContacts;
