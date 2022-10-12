import React from 'react';
import Footer from '@components/Footer/Footer';
import Nav from '@components/Nav/Nav';

type Props = React.PropsWithChildren;

const Layout = ({ children }: Props) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
