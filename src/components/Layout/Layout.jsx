import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Error } from 'components/Error';
import { Main } from 'components/GlobalStyles.styled';

export const Layout = () => (
  <>
    <Header />
    <Main>
      <Suspense fallback={<Error>Magic is happening, please wait!</Error>}>
        <Outlet />
      </Suspense>
    </Main>
    <Footer />
  </>
);
