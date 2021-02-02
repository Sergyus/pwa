import Header from '../Header';
import Footer from '../Footer';
import React from 'react';
import { Container } from '@material-ui/core';
import { ReactNode } from 'react';

type Props = {
  children: NonNullable<ReactNode>;
};

export default function Layout(props: Props): JSX.Element {
  return (
    <>
      <div className="app-content">
        <Header />
        <Container maxWidth="lg">{props.children}</Container>
      </div>
      <Footer />
    </>
  );
}
