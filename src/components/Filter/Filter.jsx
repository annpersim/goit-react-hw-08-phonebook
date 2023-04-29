import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/filterSlice';
import css from '../LoginForm/LoginForm.module.css';
import { Text } from 'components/App.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label className={css.label}>
      <Text>Find contacts by name </Text>
      <input
        type="text"
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
      />
    </label>
  );
};
