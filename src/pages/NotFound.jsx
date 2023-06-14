import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main>
      <h1>Page not found</h1>
      <Link to="/">To home page</Link>
    </main>
  );
};

export default NotFound;
