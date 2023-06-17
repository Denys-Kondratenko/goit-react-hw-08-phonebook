import { HomeLink, HomeList, HomeWrap } from './Home.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <HomeWrap>
      <h1>Welcome to the Phonebook</h1>

      <HomeList>
        {isLoggedIn ? (
          <li>
            <HomeLink to="/contacts">Contacts</HomeLink>
          </li>
        ) : (
          <>
            <li>
              <HomeLink to="/register">Register</HomeLink>
            </li>
            <li>
              <HomeLink to="/login">Log In</HomeLink>
            </li>
          </>
        )}
      </HomeList>
    </HomeWrap>
  );
};

export default Home;
