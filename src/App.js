import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import NaviBar from './Components/NaviBar'
import Home from './Pages/Home'
import Rent from './Pages/Rent'
import About from './Pages/About'
import Villages from './Pages/Villages'



function App() {
  return (
    <div className="App">
      <Router>
        <NaviBar />
        <Switch>

          <Route exact path='/' component={Home}></Route>
          <Route exact path='/Rent' component={Rent}></Route>
          <Route exact path='/Villages' component={Villages}></Route>
          <Route exact path='/About' component={About}></Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
