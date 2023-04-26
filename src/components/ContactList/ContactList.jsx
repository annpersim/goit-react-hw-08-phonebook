import { ContactsList, ContactsItem, Button } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
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
