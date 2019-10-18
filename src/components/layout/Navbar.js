import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  console.log(props);
  return (
    <div className="ui menu secondary pointing">
      <div className="ui container">
        <Link to="/">
          <div className="header item">Home</div>
        </Link>

        <div className="right menu">
          <Link to="/signup">
            <div className="item">Sign Up</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
