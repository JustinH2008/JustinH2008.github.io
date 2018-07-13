import React, { Component } from 'react'
import './App.css'
import Menu from './components/Menu'
import Routes from './routes'
import {BrowserRouter} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="App">
            <Menu />
            <h1 className="App-intro">
            </h1>
          </div>
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
