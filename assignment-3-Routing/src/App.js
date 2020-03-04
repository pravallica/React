import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Home from './containers/Home/Home';


class App extends Component {
  render () {
    return (
      <div className="App">
        <BrowserRouter>
        
          
          <Home/>
        
        </BrowserRouter>
        
        </div>
    );
  }
}

export default App;
