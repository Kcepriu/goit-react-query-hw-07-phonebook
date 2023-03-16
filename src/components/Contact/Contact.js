import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { WrapContact } from './Contact.styled';
import { editContact } from 'reduxe/sliceContacts';
import { deleteContacts } from 'reduxe/operation';

const Contact = ({ contact }) => {
  const dispatcher = useDispatch();

  const handlerDelete = () => dispatcher(deleteContacts(contact.id));

  const handlerEdit = () => dispatcher(editContact(contact.id));

  return (
    <WrapContact>
      {contact.name}: {contact.phone}
      <button type="button" onClick={handlerDelete}>
        Delete
      </button>
      <button type="button" onClick={handlerEdit}>
        Edit
      </button>
    </WrapContact>
  );
};

Contact.propType = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    edit: PropTypes.bool,
  }).isRequired,
};

export default Contact;
