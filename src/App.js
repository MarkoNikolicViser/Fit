import './App.css';
import React from 'react'
import Profil from './components/profil';
import Home from './components/home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Unos from './components/unos'
import {TProvider} from './components/context'
import Recepti from './components/recepti';

function App() {



  return (
    <div>
      <Router>
        <TProvider>
      <div className="split">
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/unos' component={Unos}/>
        <Route path='/recepti' component={Recepti}/>
        </Switch>
        <Profil/>
      </div>
      </TProvider>
      </Router>
    </div>
  );
}

export default App;
