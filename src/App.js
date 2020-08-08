import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Quiz from './pages/Quiz';
import Profile from './pages/Profile';
import Error404 from './pages/Error/Error404';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/quiz">
          <Quiz />
        </Route>
        <Route path="*" exact={true} component={Error404} />
      </Switch>
    </>
  );
}

export default App;
