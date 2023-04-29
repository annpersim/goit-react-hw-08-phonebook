import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';
import { Container, Button, SubTitle } from 'components/App.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <Container>
        <SubTitle>Login</SubTitle>
        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
          <label className={css.label}>
            Email
            <input type="email" name="email" />
          </label>
          <label className={css.label}>
            Password
            <input type="password" name="password" />
          </label>
          <Button type="submit">Log In</Button>
        </form>
      </Container>
    </>
  );
};
