import React, { Component } from 'react';
import './App.css';
import SnackList from './components/SnackList/SnackList';
import SnackForm from './components/SnackForm/SnackForm';

class App extends Component {

  render() {
    return (
      <div className="App">
        <SnackForm />
        <SnackList />
      </div>
    );
  }
  
}

export default App;