import { ContactsList, ContactsItem, Button } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <ContactsList>
    {contacts.map(({ id, name, number }) => (
      <ContactsItem key={id}>
        <p>
          {name}: {number}
        </p>
        <Button type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </Button>
      </ContactsItem>
    ))}
  </ContactsList>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
