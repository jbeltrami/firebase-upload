export const signUp = form => async (dispatch, getState, getFirebase) => {
  const firebase = getFirebase();

  try {
    const fbNewUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(form.email, form.password);

    await firebase
      .firestore()
      .collection('users')
      .doc(fbNewUser.user.uid)
      .set({
        firstName: form.firstName,
        lastName: form.lastName,
        initials: form.firstName[0] + form.lastName[0],
      });

    await dispatch({ type: 'CREATE_USER', payload: form });
  } catch (error) {
    await dispatch({ type: 'CREATE_USER_ERROR', payload: error.message });
  }
};
