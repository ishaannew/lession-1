import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="header-content">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Chao mung den voi khoa hoc ReactJS
            </p>
          </div>
          <p className="note">
              De bat dau vui long truy 
              <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
                 src/App.js 
              </a>
              cap de chinh sua va luu lai.
          </p>
        </header>
      </div>
    );
  }
}

export default App;