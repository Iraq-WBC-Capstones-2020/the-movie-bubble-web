import React from 'react';
import LoginForm from './components/AuthorizationForm/LoginForm/LoginForm';
import RegisterForm from './components/AuthorizationForm/RegisterForm/RegisterForm';
import Input from './components/AuthorizationForm/Input/Input';
function App() {
  return (
    <div>
      {/* <Input type="text" placeHolder="hello"></Input> */}
      <LoginForm />
      {/* <RegisterForm /> */}
    </div>
  );
}

export default App;
