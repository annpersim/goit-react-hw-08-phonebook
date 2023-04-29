import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/operations';

import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.flex}>
      <p className={css.margin}>Hola, {user.name}</p>
      <button
        className={css.logout}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
