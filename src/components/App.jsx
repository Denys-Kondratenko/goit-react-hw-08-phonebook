import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { Layout } from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';

const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const NotFound = lazy(() => import('pages/NotFound'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
