import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const Navbar = props => {
  const { onSignOut } = props;
  return (
    <div className="ui menu secondary pointing">
      <div className="ui container">
        <Link to="/">
          <div className="header item">Home</div>
        </Link>

        <div className="right menu">
          <Link to="/signin">
            <div className="item">Login</div>
          </Link>
          <button
            type="button"
            className="item"
            onClick={onSignOut}
            onKeyPress={onSignOut}
          >
            Sign Out
          </button>
        </div>
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
)(Navbar);

Navbar.propTypes = {
  onSignOut: PropTypes.func,
};
