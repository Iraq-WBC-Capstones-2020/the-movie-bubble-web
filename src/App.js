import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/Aboutpage/Aboutpage';
import Quiz from './pages/Quiz';
import Profile from './pages/Profile';
import Error404 from './pages/Error/Error404';
import Movie from './pages/MoviePage/MoviePage';
import Navbar from './components/Navbar';
import Result from './pages/ResultPage/ResultPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/movie/:id" component={Movie} />
          <Route path="/result" component={Result} />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
