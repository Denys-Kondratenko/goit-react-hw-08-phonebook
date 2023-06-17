import { Link, Wrap } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Wrap>
      <Link to="/login">Log In</Link>
      <Link to="/register">Register</Link>
    </Wrap>
  );
};
