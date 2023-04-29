import { useSelector } from 'react-redux';
import { selectFiltredContacts } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import css from './ContactList.module.css';
import { Button } from 'components/App.styled';

export const ContactList = () => {
  const contacts = useSelector(selectFiltredContacts);
  const dispatch = useDispatch();
  return (
    <ul className={css.list}>
      {contacts?.map(({ name, number, id }) => {
        return (
          <li key={id} className={css.item}>
            <p className={css.names}>
              {name}: {number}
            </p>
            <Button
              type="button"
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              Delete
            </Button>
          </li>
        );
      })}
    </ul>
  );
};
