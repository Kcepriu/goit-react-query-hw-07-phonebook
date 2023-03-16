import { useDispatch, useSelector } from 'react-redux';
import AddContact from './AddContact/AddContact';
import ListContacts from './ListContacts/ListContacts';
import Filter from './Filter/Filter';
import Spinner from './Spinner/Spinner';

import { TitlePhonebook, TitleContacts, Container } from './App.style';

import { getContacts, getError, getIsLoading } from 'reduxe/selectors';
import { fetchAllContacts } from 'reduxe/operation';
import { useEffect } from 'react';

const App = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  // useEffect(() => {
  //   if (!error) alert('ERROR services');
  // }, [error]);

  return (
    <Container className="App">
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <AddContact />

      {contacts.length > 0 && (
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
