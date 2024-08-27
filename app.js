import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import SideInfo from './src/SideInfo'
import MainBox from './src/MainBox'
import Navigation from './src/Navigation'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className="flex justify-between  flex-row " >
        <SideInfo />
        <MainBox />
        <Navigation/>
      </div>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);