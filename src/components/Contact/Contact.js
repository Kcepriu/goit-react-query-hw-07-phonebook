import PropTypes from 'prop-types';
import { WrapContact } from './Contact.styled';
import { useDeleteContactsMutation } from 'reduxe/sliceContacts';

const Contact = ({ contact, handlerEditionContact }) => {
  const [deleteContacts, result] = useDeleteContactsMutation();

  return (
    <>
      <WrapContact>
        {contact.name}: {contact.phone}
        <button
          type="button"
          onClick={() => deleteContacts(contact.id)}
          disabled={result.isLoading}
        >
          Delete
        </button>
        <button
          type="button"
          onClick={() => handlerEditionContact(true)}
          disabled={result.isLoading}
        >
          Edit
        </button>
      </WrapContact>
    </>
  );
};

Contact.propType = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    edit: PropTypes.bool,
  }).isRequired,
  handlerEditionContact: PropTypes.func.isRequired,
};

export default Contact;
