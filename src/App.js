import React from 'react';
import LoginForm from './components/AuthorizationForm/LoginForm/LoginForm';
import RegisterForm from './components/AuthorizationForm/RegisterForm/RegisterForm';
function App() {
  return (
    <div>
      <LoginForm />
      <RegisterForm />
      <div>the movie bubble</div>
    </div>
  );
}

export default App;
