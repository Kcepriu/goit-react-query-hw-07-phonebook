import AddContact from './AddContact/AddContact';
import ListContacts from './ListContacts/ListContacts';
import Filter from './Filter/Filter';
import Spinner from './Spinner/Spinner';
import { TitlePhonebook, TitleContacts, Container } from './App.style';
import { useGetContactsQuery } from 'reduxe/sliceContacts';

const App = () => {
  const { data: contacts, error, isLoading } = useGetContactsQuery();

  return (
    <Container className="App">
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <AddContact />
      {!error && contacts && contacts?.length > 0 && (
        <>
          <Filter />
          <TitleContacts>Contacts</TitleContacts>
          <ListContacts />
        </>
      )}
      {isLoading && !error && <Spinner />}
    </Container>
  );
};

export default App;
