import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Home from './comp/Home';
import Dsgn from './comp/Dsgn';
import Dev from './comp/Dev';
import Contact from './comp/Contact';

const currentYear = new Intl.DateTimeFormat('en-US', {year: 'numeric'}).format(new Date());

function App() {
  return (
    <div>
      <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/dsgn">Design</NavLink>
        <NavLink to="/dev">Development</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <Route
        exact path="/"
        render={props => <Home {...props} />}
      />
      <Route
        path="/dsgn"
        render={props => <Dsgn {...props} />}
      />
      <Route
        path="/dev"
        render={props => <Dev {...props} />}
      />
      <Route
        path="/contact"
        render={props => <Contact {...props} />}
      />
      <footer>
        © {currentYear} Brett Flora
      </footer>
    </div>
  );
}

export default App;
