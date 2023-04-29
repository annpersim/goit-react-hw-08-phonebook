import { useAuth } from 'hooks/useAuth';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import css from './NavBar.module.css';

export const NavBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.nav}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}{' '}
    </header>
  );
};
