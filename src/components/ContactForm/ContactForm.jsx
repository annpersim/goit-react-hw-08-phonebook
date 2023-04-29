import { useDispatch } from 'react-redux';
import { useContacts } from 'hooks/useContacts';
import { addContacts } from 'redux/contacts/operations';
import css from '../LoginForm/LoginForm.module.css';
import { SubTitle, Button } from 'components/App.styled';

export default function ContactForm() {
  const dispatch = useDispatch();
  const { contacts } = useContacts();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.elements.name.value,
      number: form.elements.number.value,
    };
    contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    )
      ? alert(`${data.name} is already in contacts!`)
      : dispatch(addContacts(data));
    form.reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <SubTitle>Create new contact:</SubTitle>
        <label className={css.label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.label}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <Button type="submit">Add contact</Button>
      </form>
    </>
  );
}
