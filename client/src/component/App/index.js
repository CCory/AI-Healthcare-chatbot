import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../header';
import HomPage from '../../pages/home';
import Doctors from '../../pages/doctors';
import AboutUs from '../../pages/about';
import Reservation from '../../pages/reservation';
import ControlPanel from '../../pages/controlPanel';
import Error404 from '../../pages/error';
import Login from '../../pages/login';

import './App.css';

function App() {
  // make all links by react router
  // and put the header and footer component in the pages
  // except the control panel
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <HomPage />
        </Route>
        <Route path="/doctors">
          <Header />
          <Doctors />
        </Route>
        <Route path="/reservation">
          <Header />
          <Reservation />
        </Route>
        <Route path="/about">
          <Header />
          <AboutUs />
        </Route>
        <Route path="/login">
          <Header />
          <Login />
        </Route>
        
        <Route exact path="/CP">
          <ControlPanel />
        </Route>
        <Route path="/*">
          <Error404 />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
