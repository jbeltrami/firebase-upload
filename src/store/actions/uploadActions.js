export const fileUpload = file => (dispatch, getState, getFirebase) => {
  const firebase = getFirebase();
  try {
    dispatch({ type: 'FILE_UPLOAD', payload: 'Uploaded success' });
  } catch (error) {
    dispatch({ type: 'FILE_UPLOAD_ERROR', payload: error });
  }
};
