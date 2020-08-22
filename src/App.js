import React, { useState } from 'react';
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
  const [result, setResult] = useState([]);
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(() => 0);
  const reset = () => {
    setIndex(0);
    setResult([]);
    setProgress(0);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar reset={reset} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route
            path="/quiz"
            render={() => (
              <Quiz
                result={setResult}
                index={[index, setIndex]}
                prog={[progress, setProgress]}
              />
            )}
          />
          <Route path="/result" component={Result} />
          <Route path="/movie/:id" component={Movie} />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
