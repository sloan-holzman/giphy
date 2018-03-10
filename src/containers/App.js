import React, { Component } from 'react';
import '../stylesheets/App.css';
import Navbar from '../components/Navbar'
import Grid from '../components/Grid'
import GiphyApi from "../api/GiphyApi"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searched: false,
      searching: false,
      results: [],
      settings: {
        limit: '25',
        rating: 'pg'
      }
    };
    this.getSearchResults = this.getSearchResults.bind(this);
  }

  getSearchResults(searchText){
    this.setState({
      searching: true,
      searchText: searchText
    })
    let joinedSearchText = searchText.split(" ").join("+")
    GiphyApi.getSearchResults(this.state.settings.limit, this.state.rating, joinedSearchText)
    .then(response => {
      if (response.status === 200) {
        console.log("success")
        this.setState({
          searched: true,
          searching: false,
          results: response.data.data
        })
      }
      console.log(this.state.results)
    })
    .catch(err => console.log(err))
  }

  render() {
    let searched = this.state.searched ? "true" : "false"
    let searching = this.state.searching ? "true" : "false"
    let results = this.state.results.length
    return (
      <div className="App">
        <Navbar getSearchResults={this.getSearchResults}/>
        <div>
          <p>Searched: {searched}</p>
          <p>Searching: {searching}</p>
          <p>Results: {results}</p>
        </div>
        <section className="results">
          {this.state.searched && <p>Search results for '{this.state.searchText}'</p>}
          {this.state.searched && <Grid results={this.state.results}/>}
        </section>
      </div>
    );
  }
}

export default App;
