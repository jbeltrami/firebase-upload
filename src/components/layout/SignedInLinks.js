import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = props => {
  const { onSignOut } = props;
  return (
    <div className="ui container">
      <NavLink className="header item" to="/">
        Home
      </NavLink>

      <div className="right menu">
        <NavLink className="item" to="/signin">
          Login
        </NavLink>

        <a
          className="item"
          role="button"
          tabIndex={0}
          onClick={onSignOut}
          onKeyPress={onSignOut}
        >
          Sign Out
        </a>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onSignOut: () => {
    dispatch(signOut());
  },
});

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);

SignedInLinks.propTypes = {
  onSignOut: PropTypes.func,
};
