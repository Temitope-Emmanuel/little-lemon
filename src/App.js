import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Home from './pages/Home';
import Booking from './pages/Booking'

function App() {
  return (
   <Router>
    <Switch>
      <Route path="/booking">
        <Booking/>
      </Route>
      <Route path="/home">
        <Home/>
      </Route>
    </Switch>
   </Router>
  );
}

export default App;
