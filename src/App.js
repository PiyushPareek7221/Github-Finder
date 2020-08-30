import React from 'react';
import logo from './logo.png';
import './App.css';
import Profile from './Profile';

function App() {
  return (
    <div className="app">
        <div className='image'><img src={logo} className="app_logo" alt="logo" /></div><hr></hr>
        <Profile/>
    </div>
  );
}

export default App;
