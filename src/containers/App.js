import React, { Component } from 'react';
import '../stylesheets/App.css';
import Navbar from '../components/Navbar'
import Grid from '../components/Grid'
import GiphyApi from "../api/GiphyApi"
import CircularProgressGraphic from '../components/CircularProgressGraphic'

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
    this.clearSearch = this.clearSearch.bind(this);
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

  clearSearch(e){
    e.preventDefault();
    this.setState({
      searchText: '',
      searched: false,
      results: []
    })
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
        </div>
        <section className="results">
          {this.state.searching && <CircularProgressGraphic size={80} thickness={5} />}
          {this.state.searched &&
            <div className="center">
              <p>Search results for '{this.state.searchText}'<button onClick={this.clearSearch}>[clear]</button></p>
              <p>(Results: {results})</p>
            </div>}
          {this.state.searched && <Grid results={this.state.results}/>}
        </section>
      </div>
    );
  }
}

export default App;
