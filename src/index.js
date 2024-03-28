import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/index.css';
import App from './components/App';
import { createStore } from 'redux';
import reducer from './reducers/post-list-reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);

store.subscribe(() =>
  console.log(store.getState())
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
