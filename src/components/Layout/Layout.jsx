import { Container } from './Layout.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { AppBar } from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
