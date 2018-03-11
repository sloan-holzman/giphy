import React, { Component } from 'react'
import AutoComplete from 'material-ui/AutoComplete';


export default class AutoCompleteControlled extends Component {
  state = {
    searchText: '',
    recentSearches: []
  };

  componentWillMount() {
    if (!localStorage.searches) {
      localStorage.searches = JSON.stringify([])
    }
    this.setState({
      recentSearches: JSON.parse(localStorage.searches)
    });
  }

  handleUpdateInput = (searchText) => {
    let lowerCaseSearchText = searchText.toLowerCase();
    this.setState({
      searchText: lowerCaseSearchText,
    });
  };

  handleNewRequest = () => {
    let recentSearches = this.state.recentSearches
    if (!recentSearches.find(item => item === this.state.searchText)) {
      recentSearches.push(this.state.searchText)
      this.setState({
        recentSearches: recentSearches
      })
      localStorage.searches = JSON.stringify(this.state.recentSearches)
    }
    this.props.fetchSearchResults(this.state.searchText)
  };

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
          maxSearchResults={10}
        />
      </div>
    );
  }
}
