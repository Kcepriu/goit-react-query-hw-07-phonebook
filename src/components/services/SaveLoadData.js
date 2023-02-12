const NAME_STORAGE = 'Contacts_Phonebook';

function saveData(data) {
  try {
    const serializedState = JSON.stringify(data);
    localStorage.setItem(NAME_STORAGE, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

function loadData() {
  let restoredSession = [];
  try {
    restoredSession = JSON.parse(localStorage.getItem(NAME_STORAGE));
  } catch {
    restoredSession = [];
  }

  return restoredSession || [];
}

export { saveData, loadData };
