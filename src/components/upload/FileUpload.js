import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fileUpload } from '../../store/actions/uploadActions';

const FileUpload = props => {
  const handleUpload = file => {
    const { onFileUpload } = props;
    onFileUpload(file);
  };

  return (
    <div className="ui grid">
      <div className="ui row centered">
        <div className="eight wide column">
          <h1>Some headline</h1>
          <p>Some content</p>
          <button type="button" onClick={() => handleUpload('Hello')}>
            Click me!
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onFileUpload: file => {
    dispatch(fileUpload(file));
  },
});

const mapStateToProps = state => ({
  auth: state.firebase.auth,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileUpload);

FileUpload.propTypes = {
  onFileUpload: PropTypes.func,
};
