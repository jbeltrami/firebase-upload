const authReducer = (state = { authError: '' }, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      console.log('CREATE USER SUCCESS');
      return state;

    case 'CREATE_USER_ERROR':
      console.error('CREATE USER ERROR: ', action.payload);
      return { ...state, authError: action.payload };
    default:
      return state;
  }
};

export default authReducer;
