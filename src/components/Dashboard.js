import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import AdminDashboard from './dashboards/AdminDashboard';
import ClientDashboard from './dashboards/ClientDashboard';

const Dashboard = props => {
  const { auth, profile } = props;

  const renderDashboard = userType => {
    if (userType === 'admin') return <AdminDashboard />;
    return <ClientDashboard />;
  };

  if (!auth.uid) return <Redirect to="/signin" />;
  return renderDashboard(profile.userType);
};

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  firestore: state.firestore,
  profile: state.firebase.profile,
});

export default connect(mapStateToProps)(Dashboard);
Dashboard.propTypes = {
  auth: PropTypes.object,
  profile: PropTypes.object,
};
