import React, { Component } from 'react';
import './App.css';
import store from './store/newindex';
import Newcounter from './counter';



class App extends Component {
  render() {
    return (
      <div className="App">
     < Newcounter  store={store}/>
      </div>
    );
  }
}

export default App;
