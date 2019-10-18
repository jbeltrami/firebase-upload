import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

const Dashboard = props => {
  console.log('dashboard props: ', props);
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Goes here</p>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    firebase: state.firebase,
    firestore: state.firestore,
  };
};

export default connect(mapStateToProps)(Dashboard);
