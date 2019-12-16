import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import Nav from './comp/Nav';
import Footer from './comp/Footer';

function App() {
  return (
    <div>
      <h3>Main App</h3>
      <Nav />
      <Footer />
    </div>
  );
}

export default App;
