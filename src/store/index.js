import { createStore } from 'redux';
import mainReducer from "./reducers";

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(mainReducer, reduxDevTools);
