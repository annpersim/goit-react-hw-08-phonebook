import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export function App() {
  return (
    <div style={{ maxWidth: 550, fontSize: 20, padding: 20 }}>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
