import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import IssuePage from './pages/IssuePage';
import store from './store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/:id" component={IssuePage} exact />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
