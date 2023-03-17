import { useSelector } from 'react-redux';
import { getFilter } from 'reduxe/selectors';

import { ContactList } from './ListContacts.styled';
import ContactProxy from 'components/ContactProxy/ContactProxy';
import { useGetContactsQuery } from 'reduxe/sliceContacts';

const ListContacts = () => {
  const { data: contacts } = useGetContactsQuery();

  const filter = useSelector(getFilter);

  const visibleContacts = contacts.filter(element =>
    element.name.toUpperCase().includes(filter.toUpperCase())
  );

  return (
    <ContactList>
      {visibleContacts.map(contact => {
        return <ContactProxy key={contact.id} contact={contact} />;
      })}
    </ContactList>
  );
};

export default ListContacts;
