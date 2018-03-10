import React, { Component } from 'react'
import AutoComplete from 'material-ui/AutoComplete';
import GiphyApi from "../api/GiphyApi"


export default class AutoCompleteControlled extends Component {
  state = {
    searchText: '',
    recentSearches: []
  };

  handleUpdateInput = (searchText) => {
    this.setState({
      searchText: searchText,
    });
  };

  handleNewRequest = () => {
    let recentSearches = this.state.recentSearches
    recentSearches.push(this.state.searchText)
    this.setState({
      recentSearches: recentSearches
    })
    localStorage.searches = JSON.stringify(this.state.recentSearches)
    GiphyApi.getSearchResults('25', 'pg', this.state.searchText.split(" ").join("+"))
  };

  componentWillMount() {
    if (!localStorage.searches) {
      localStorage.searches = JSON.stringify([])
    }
    this.setState({
      recentSearches: JSON.parse(localStorage.searches)
    });
  }

  render() {
    return (
      <div className="autocomplete">
        <AutoComplete
          hintText="search for GIFs"
          searchText={this.state.searchText}
          onUpdateInput={this.handleUpdateInput}
          onNewRequest={this.handleNewRequest}
          dataSource={this.state.recentSearches}
          filter={AutoComplete.fuzzyFilter}
          openOnFocus={true}
        />
      </div>
    );
  }
}
