import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Light from './components/light/light';
import Traffic from './traffic/traffic';
import React, { useState } from'react';


function App() {


  return (
    <div className='App'>

        <Traffic/>
    </div>

  );
}

export default App;
