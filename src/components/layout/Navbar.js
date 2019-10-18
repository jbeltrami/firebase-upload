import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  console.log(props);
  return (
    <div className="ui secondary pointing menu">
      <Link to="/">
        <div className="header item">Home</div>
      </Link>

      <div className="right menu">
        <Link to="/signup">
          <a className="item">Sign Up</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
