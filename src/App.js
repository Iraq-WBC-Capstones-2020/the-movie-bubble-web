import React from 'react';
import MovieGrid from './components/MovieGrid/MovieGrid';
function App() {
  return (
    <div className="dark-mode-background">
      <h1 className="text-2xl bg-lightblue">The Movie Bubble</h1>
      <MovieGrid />
    </div>
  );
}

export default App;
