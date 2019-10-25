import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

const AdminDashboard = props => {
  const { auth } = props;
  const [isAdmin, setIsAdmin] = useState(false);

  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <div className="ui main container">
      <h1>Admin Dashboard</h1>
      <div className="ui grid container">
        <div className="ui row">
          <div className="four wide column">
            <Link to="/signup">
              <div className="ui card">
                <div className="content">
                  <div className="header">Create new User</div>
                  <div className="description">
                    <p>Click here to create new user</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="four wide column">
            <Link to="/upload">
              <div className="ui card">
                <div className="content">
                  <div className="header">Upload New File</div>
                  <div className="description">
                    <p>Click here to upload file</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="four wide column"></div>
          <div className="four wide column"></div>
          <div className="four wide column"></div>
          <div className="four wide column"></div>
          <div className="four wide column"></div>
          <div className="four wide column"></div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    firestore: state.firestore,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(AdminDashboard);
AdminDashboard.propTypes = {
  auth: PropTypes.object,
};
