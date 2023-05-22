import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './Pages/Login';
import Chat from './Pages/Chat';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={ Login } />
        <Route exact path='/chat' Component={ Chat }/>
      </Routes>
    </Router>
  );
}

export default App;
