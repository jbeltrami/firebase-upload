/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

const SignUp = props => {
  const { auth, handleSignUp, authError } = props;
  const [form, setForm] = useState({ userType: 'client' });

  const handleSubmit = async e => {
    e.preventDefault();
    await handleSignUp(form);
  };

  const handleChange = e => {
    const key = e.target.name;
    const { value } = e.target;

    const authUser = auth.uid;

    setForm({ ...form, [key]: value, userAdmin: authUser });
  };

  const renderComponent = () => (
    <div className="ui main container">
      <form className="ui form" onSubmit={handleSubmit}>
        <h4 className="ui dividing header">Create a new user</h4>
        <div className="field required">
          <div className="two fields">
            <div className="field required">
              <label htmlFor="firstName">First Name</label>
              <input
                required
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
              />
            </div>
            <div className="field required">
              <label htmlFor="lastName">Last Name</label>

              <input
                required
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="field required">
          <div className="two fields">
            <div className="field required">
              <label htmlFor="email">Email</label>
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className="field required">
              <label htmlFor="password">Password</label>
              <input
                required
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="two fields">
          <div className="field required">
            <label>User Type</label>
            <select
              className="ui fluid dropdown"
              name="userType"
              onChange={handleChange}
            >
              <option value="client">Client</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </div>

        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
      {authError.authError ? (
        <div className="ui negative message">
          <div className="header">{authError.authError}</div>
        </div>
      ) : null}
    </div>
  );

  if (!auth.uid) return <Redirect to="/signin" />;
  return renderComponent();
};

const mapStateToProps = state => ({
  authError: state.auth,
  auth: state.firebase.auth,
});

const mapDispatchToProps = dispatch => ({
  handleSignUp: form => {
    dispatch(signUp(form));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);

SignUp.propTypes = {
  authError: PropTypes.object,
  auth: PropTypes.object,
  handleSignUp: PropTypes.func,
};
