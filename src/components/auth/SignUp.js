/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SignUp = props => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    userType: 'client',
    createdAt: null,
  });

  const { history } = props;

  const handleSubmit = e => {
    e.preventDefault();
    console.log('form submitted');
    console.log(form);
    history.push('/');
  };

  const handleChange = e => {
    const key = e.target.name;
    const { value } = e.target;

    setForm({ ...form, createAt: new Date(), [key]: value });
  };

  return (
    <div className="ui main container">
      <form className="ui form" onSubmit={handleSubmit}>
        <h4 className="ui dividing header">Create a new user</h4>
        <div className="field required">
          <div className="two fields">
            <div className="field required">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
              />
            </div>
            <div className="field required">
              <label htmlFor="lastName">Last Name</label>

              <input
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
    </div>
  );
};

export default SignUp;
SignUp.propTypes = {
  history: PropTypes.object,
};
