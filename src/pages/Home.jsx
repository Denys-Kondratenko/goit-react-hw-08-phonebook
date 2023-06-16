import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>Welcome to the PhoneBook</h1>

      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
