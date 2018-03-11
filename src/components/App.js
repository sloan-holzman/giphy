import React, { Component } from 'react';
import '../stylesheets/App.css';
import Navbar from './Navbar'
import Footer from './Footer'
import Grid from './Grid'
import GiphyApi from "../api/GiphyApi"
import CircularProgressGraphic from './CircularProgressGraphic'

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
    this.changeLimit = this.changeLimit.bind(this);
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
  };

  fetchSearchResults(searchText){
    this.setState({
      searching: true,
      searchText: searchText
    })
    let joinedSearchText = searchText.split(" ").join("+")
    GiphyApi.fetchSearchResults(this.state.settings.limit, this.state.rating, joinedSearchText)
    .then(response => {
      if (response.status === 200) {
        this.setState({
          searched: true,
          searching: false,
          results: response.data.data
        })
      }
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
        this.setState({
          searched: true,
          searching: false,
          results: response.data.data
        })
      }
    })
    .catch(err => console.log(err))
  }

  fetchRandomResult(){
    this.setState({
      searching: true,
      searchText: "random"
    })
    GiphyApi.fetchRandomResult(this.state.rating)
    .then(response => {
      if (response.status === 200) {
        this.setState({
          searched: true,
          searching: false,
          results: [response.data.data]
        })
      }
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

  changeLimit(newLimit){
    let settingsCopy = this.state.settings
    settingsCopy.limit = newLimit
    this.setState({
      settings: settingsCopy
    })
    if (this.state.searched) {
      this.fetchSearchResults(this.state.searchText)
    }
  }

  render() {
    let results = this.state.results.length
    let limitClass = `limit-buttons _${this.state.settings.limit}`
    return (
      <div className="App">
        <header>
          <Navbar
            fetchSearchResults={this.fetchSearchResults}
            width={this.state.width}
            fetchTrendingResults={this.fetchTrendingResults}
            fetchRandomResult={this.fetchRandomResult}
          />
        </header>
        <main>
          {this.state.searching && <CircularProgressGraphic size={80} thickness={5} />}
          {!this.state.searched && <h1>Giphy Search!</h1>}
          {!this.state.searched && <h2>By Sloan Holzman</h2>}
          {/* {!this.state.searched && <h2>Search for your favorite GIFs...</h2>} */}
          {this.state.searched &&
            <div>
              <h3 className="search-results__explanation">Search results ({results}) for '{this.state.searchText}'<button onClick={this.clearSearch}>[clear]</button></h3>
              <p className="italic">Click on any GIF for full size and details</p>
            </div>}
          {this.state.searched && <Grid width={this.state.width} results={this.state.results} reverseModal={this.reverseModal} modalOpen={this.state.modalOpen}/>}
        </main>
        <Footer limitClass={limitClass} changeLimit={this.changeLimit}/>
      </div>
    );
  }
}

export default App;
