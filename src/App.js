import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Components
import Navbar from './components/layout/Navbar';
import Dashboard from './components/Dashboard';
import SignUp from './components/auth/SignUp';

function App() {
  return (
    <BrowserRouter>
      <div className="App ui container">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
