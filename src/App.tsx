import React from 'react';
import './App.css';
import AppHeader from './app segments/header'
import Bios from './app segments/bios';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <Bios/>
    </div>
  );
}

export default App;
