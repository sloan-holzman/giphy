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
      width: window.innerWidth,
      searchText: '',
      searched: false,
      searching: false,
      results: [],
      settings: {
        limit: '25',
        rating: 'pg'
      }
    };
    this.fetchSearchResults = this.fetchSearchResults.bind(this);
    this.fetchTrendingResults = this.fetchTrendingResults.bind(this);
    this.fetchRandomResult = this.fetchRandomResult.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
  }

  fetchSearchResults(searchText){
    this.setState({
      searching: true,
      searchText: searchText
    })
    let joinedSearchText = searchText.split(" ").join("+")
    GiphyApi.fetchSearchResults(this.state.settings.limit, this.state.rating, joinedSearchText)
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

  fetchTrendingResults(){
    this.setState({
      searching: true,
      searchText: "trending"
    })
    GiphyApi.fetchTrendingResults(this.state.settings.limit, this.state.rating)
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

  fetchRandomResult(){
    console.log("random!")
    this.setState({
      searching: true,
      searchText: "random"
    })
    GiphyApi.fetchRandomResult(this.state.rating)
    .then(response => {
      if (response.status === 200) {
        console.log("success")
        console.log(response)
        this.setState({
          searched: true,
          searching: false,
          results: [response.data.data]
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

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({
      width: window.innerWidth
    });
    console.log(this.state.width)
  };

  render() {
    let searched = this.state.searched ? "true" : "false"
    let searching = this.state.searching ? "true" : "false"
    let results = this.state.results.length
    return (
      <div className="App">
        <Navbar
          fetchSearchResults={this.fetchSearchResults}
          width={this.state.width}
          fetchTrendingResults={this.fetchTrendingResults}
          fetchRandomResult={this.fetchRandomResult}
        />
        <div>
          <p>Searched: {searched}</p>
          <p>Searching: {searching}</p>
        </div>
        <section className="results">
          {this.state.searching && <CircularProgressGraphic size={80} thickness={5} />}
          {this.state.searched &&
            <div className="center">
              <p className="search-results__explanation">Search results ({results}) for '{this.state.searchText}'<button onClick={this.clearSearch}>[clear]</button></p>
              <p className="italic">Click on any GIF for full size and details</p>
            </div>}
          {this.state.searched && <Grid results={this.state.results} reverseModal={this.reverseModal} modalOpen={this.state.modalOpen}/>}
        </section>
      </div>
    );
  }
}

export default App;
