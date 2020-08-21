import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/Aboutpage/Aboutpage';
import Quiz from './pages/Quiz';
import Profile from './pages/Profile';
import Error404 from './pages/Error/Error404';
import Movie from './pages/MoviePage/MoviePage';
import Navbar from './components/Navbar';
function App() {
  const [result, setResult] = useState([]);
  const [index, setIndex] = useState(0);
  console.log(result);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Link to="/">Link</Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route path="/result" component={About} />
          <Route
            path="/quiz"
            component={() => (
              <Quiz result={setResult} index={[index, setIndex]} />
            )}
          />

          <Route path="/movie/:id" component={Movie} />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
