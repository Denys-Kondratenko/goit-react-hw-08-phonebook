import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Link, NavWrap } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavWrap>
      <Link to="/" end>
        Home
      </Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </NavWrap>
  );
};
