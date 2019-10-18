import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

const Dashboard = props => {
  const { auth } = props;

  if (!auth.uid) return <Redirect to="/signup" />;
  return (
    <div className="ui main container">
      <h1>Dashboard</h1>
      <p>Goes here</p>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    firestore: state.firestore,
  };
};

export default connect(mapStateToProps)(Dashboard);
Dashboard.propTypes = {
  auth: PropTypes.object,
};
