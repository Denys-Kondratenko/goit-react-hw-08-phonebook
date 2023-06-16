import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      <NavLink to="/login">Log In</NavLink>
      <NavLink to="/register">Register</NavLink>
    </nav>
  );
};
