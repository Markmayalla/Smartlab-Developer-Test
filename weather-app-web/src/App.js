import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { createBrowserHistory } from 'history';
import Routes from './routes';

const history = createBrowserHistory()
const store = configureStore(history)

const App = () => {
  return (
    <Provider store={store}>
      <Routes history={history} />
    </Provider>
  );
}

export default App;
