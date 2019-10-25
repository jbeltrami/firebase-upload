const uploadReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FILE_UPLOAD':
      console.log(action.payload);
      return state;

    default:
      return state;
  }
};

export default uploadReducer;
