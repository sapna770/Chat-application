import React from 'react';
import './App.css';
import { ChatEngine } from 'react-chat-engine';
import LoginForm from './Components/LoginForm';
import LogoutForm from './Components/LogoutForm';


const App = () => {

  if (!localStorage.getItem('username')) return <LoginForm />
  return (
    <div>
      <LogoutForm />
      <ChatEngine
        height="95vh"
        projectID="40c602d9-2a46-43d7-b161-1b9501ee31ab"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
      />
    </div>
  );
}
export default App;
