import React from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <div>
      <LoginForm />
      <RegisterForm />
      <h1 className="text-2xl bg-lightblue">The Movie Bubble</h1>
    </div>
  );
}

export default App;
