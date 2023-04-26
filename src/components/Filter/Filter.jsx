import { useDispatch } from 'react-redux';
import { changeValue } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label>
      Find contacts by name <br />
      <input
        type="text"
        onChange={e => dispatch(changeValue(e.currentTarget.value))}
      />
    </label>
  );
};
