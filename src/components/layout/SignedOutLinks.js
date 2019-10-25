import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => (
  <div className="right menu">
    <NavLink to="/signin">
      <div className="item">Login</div>
    </NavLink>
  </div>
);

export default SignedOutLinks;
