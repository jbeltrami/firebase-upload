import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import firebase from 'firebase/app';
import firebaseConfig from './config/fbConfig';
import App from './App';
import 'firebase/firestore';
import 'firebase/auth';
import './index.css';
// Redux
import rootReducer from './store/reducers/rootReducer';

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk.withExtraArgument(getFirebase)))
);

const rrfpProps = {
  firebase,
  config: {
    ...firebaseConfig,
    useFirestoreForProfile: true,
    userProfile: 'users',
  },
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfpProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);
