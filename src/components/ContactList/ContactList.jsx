import { ContactsList, ContactsItem, Button } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getContacts, getFilter } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);

  const filteredData = () => {
    fetchContacts();
    if (filterValue !== '') {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    return contacts;
  };

  const data = filteredData();

  return (
    <ContactsList>
      {data?.map(({ name, number, id }) => {
        return (
          <ContactsItem key={id}>
            <p>
              {name}: {number}
            </p>
            <Button
              type="button"
              onClick={() => {
                dispatch(deleteContact(id));
                setTimeout(() => {
                  dispatch(fetchContacts());
                }, 500);
              }}
            >
              Delete
            </Button>
          </ContactsItem>
        );
      })}
    </ContactsList>
  );
};
