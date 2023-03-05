export const NAME_STORAGE = 'Contacts_Phonebook_Reduxe';

export function saveDataToStarage(data) {
  try {
    const serializedState = JSON.stringify(data);
    localStorage.setItem(NAME_STORAGE, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

export function loadDataFromStorage(defautValue) {
  let restoredSession = null;
  try {
    restoredSession = JSON.parse(localStorage.getItem(NAME_STORAGE));
  } catch {
    console.log('Error local');
  }

  return restoredSession || defautValue;
}
