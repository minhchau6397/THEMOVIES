import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer'

const HomeLayout = props => {
    return (
      <>
        <Navbar />
        {props.children}
        <Footer />
      </>
    );
  };

  export default function HomeTemplate({ Component, ...props }) {
    return (
      <Route
        {...props}
        render={propsComponent => (
          <HomeLayout>
            <Component {...propsComponent} />
          </HomeLayout>
        )}
      />
    );
  }
