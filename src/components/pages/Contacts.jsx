import { ContactList } from 'components/ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactContainer, FlexList } from 'components/App.styled';
import { Filter } from 'components/Filter/Filter';

function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactContainer>
        <ContactForm />
        <FlexList>
          <Filter /> <ContactList />
        </FlexList>
      </ContactContainer>
    </>
  );
}

export default Contacts;
