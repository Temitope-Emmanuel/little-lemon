import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import './App.css';
import Home from './pages/Home';
import Booking from './pages/Booking'

function App() {
  return (
   <Router>
    <Switch>
      <Route path="/booking" component={Booking}/>
      <Route path="/home" component={Home}/>
      <Redirect to="/home" />
    </Switch>
   </Router>
  );
}

export default App;
