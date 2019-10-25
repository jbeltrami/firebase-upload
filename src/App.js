import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Components
import Navbar from './components/layout/Navbar';
import Dashboard from './components/Dashboard';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import FileUpload from './components/upload/FileUpload';

function App(props) {
  const { auth } = props;

  if (auth.isLoaded)
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/upload" component={FileUpload} />
          </Switch>
        </div>
      </BrowserRouter>
    );

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
});

export default connect(mapStateToProps)(App);
App.propTypes = {
  auth: PropTypes.object,
};
