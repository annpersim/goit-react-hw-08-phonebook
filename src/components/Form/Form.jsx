import { useState } from 'react';
import { ContactForm, Input, Button } from './Form.styled';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.list);
  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);

        break;
      case 'number':
        setNumber(value);

        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const names = contacts.map(contact => contact.name.toLowerCase());

    if (contacts.length === 0) {
      dispatch(addContact({ name: name, number: number, id: nanoid() }));
      setName('');
      setNumber('');
      return;
    }

    if (names.includes(name.toLowerCase())) {
      alert(`${name} is alerady in Contacts`);
      setName('');
      setNumber('');
      return;
    }
    dispatch(addContact({ name: name, number: number, id: nanoid() }));
    setName('');
    setNumber('');
  };

  return (
    <ContactForm onSubmit={handleSubmit}>
      <label>Name</label>
      <Input
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />
      <label>Number</label>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
        value={number}
      />

      <Button type="submit">Add contact</Button>
    </ContactForm>
  );
};
