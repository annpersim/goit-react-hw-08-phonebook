import { useEffect, useState } from 'react';

import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { nanoid } from 'nanoid';

const KEY = 'contacts';

export function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const formSubmitHandler = data => {
    const newData = { ...data, id: nanoid() };
    const filteredName = contacts.filter(contact =>
      contact.name.includes(data.name)
    );
    if (filteredName.length > 0) {
      alert(`${data.name} is already in contacts`);
    } else {
      setContacts(prevContacts => [newData, ...prevContacts]);
    }
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const lowCaseFilter = filter.toLowerCase();
  const selectedContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(lowCaseFilter)
  );

  return (
    <div style={{ maxWidth: 550, fontSize: 20, padding: 20 }}>
      <h1>Phonebook</h1>
      <Form onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={selectedContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}
