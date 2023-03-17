import PropTypes from 'prop-types';

import Contact from 'components/Contact/Contact';
import EditContact from 'components/EditContact/EditContact';
import { useState } from 'react';

const ContactProxy = ({ contact }) => {
  const [editingContact, setEditingContact] = useState(false);

  return (
    <>
      {!editingContact ? (
        <Contact contact={contact} handlerEditionContact={setEditingContact} />
      ) : (
        <EditContact
          contact={contact}
          handlerEditionContact={setEditingContact}
        />
      )}
    </>
  );
};

ContactProxy.propType = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    edit: PropTypes.bool,
  }).isRequired,
};

export default ContactProxy;
