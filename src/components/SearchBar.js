import React from 'react';

class SearchBar extends React.Component {
  state = { searchInput: '' };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.searchInput);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label> Search for a Super Hero</label>
          <input
            type="text"
            onChange={(e) => this.setState({ searchInput: e.target.value })}
            value={this.state.searchInput}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
