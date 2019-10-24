/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

const SignIn = props => {
  const { authError, auth } = props;
  const [form, buildForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    const key = e.target.name;
    const { value } = e.target;

    buildForm({ ...form, [key]: value });
  };

  const handleSubmit = e => {
    const { onSignIn } = props;

    e.preventDefault();
    onSignIn(form);
  };

  const renderComponent = () => (
    <div className="ui main container">
      <div className="ui two column centered grid stackable">
        <div className="column">
          <form className="ui form" onSubmit={handleSubmit}>
            <h4 className="ui dividing header">
              Login using username and password
            </h4>

            <div className="field required">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className="field required">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>

            <button className="ui button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>

      {authError.authError ? (
        <div className="ui negative message">
          <div className="header">{authError.authError}</div>
        </div>
      ) : null}
    </div>
  );

  if (auth.uid) return <Redirect to="/" />;
  return renderComponent();
};

const mapDispatchToProps = dispatch => ({
  onSignIn: user => {
    dispatch(signIn(user));
  },
});

const mapStateToProps = state => ({
  authError: state.auth,
  auth: state.firebase.auth,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);

SignIn.propTypes = {
  authError: PropTypes.object,
  auth: PropTypes.object,
  onSignIn: PropTypes.func,
};
