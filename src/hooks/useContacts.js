import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectFiltredContacts,
  selectIsLoading,
  selectError,
} from 'redux/selectors';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const filtredContacts = useSelector(selectFiltredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return {
    contacts,
    filtredContacts,
    isLoading,
    error,
  };
};
