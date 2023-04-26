import { ContactsList, ContactsItem, Button } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredData = () => {
    if (filter !== '') {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return contacts;
  };

  return (
    filteredData().length > 0 && (
      <ContactsList>
        {filteredData().map(({ id, name, number }) => (
          <ContactsItem key={id}>
            <p>
              {name}: {number}
            </p>
            <Button type="button" onClick={() => dispatch(removeContact(id))}>
              Delete
            </Button>
          </ContactsItem>
        ))}
      </ContactsList>
    )
  );
};
