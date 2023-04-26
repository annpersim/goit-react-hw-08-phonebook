import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { useSelector } from 'react-redux';

export function App() {
  const contacts = useSelector(state => state.contacts.list);

  const filterValue = useSelector(state => state.filter);

  const filteredData = () => {
    if (filterValue !== '') {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    return contacts;
  };

  return (
    <div style={{ maxWidth: 550, fontSize: 20, padding: 20 }}>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList data={filteredData()} />
    </div>
  );
}
