import { ContactsList, ContactsItem, Button } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';

export const ContactList = ({ data }) => {
  const dispatch = useDispatch();

  return (
    data.length > 0 && (
      <ContactsList>
        {data.map(({ id, name, number }) => (
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
