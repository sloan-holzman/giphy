import React, { Component } from 'react';
import '../stylesheets/App.css';
import Navbar from '../components/Navbar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searched: false,
      searching: false,
      results: [],
      settings: {
        limit: '25',
        rating: 'pg'
      }
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
      </div>
    );
  }
}

export default App;
