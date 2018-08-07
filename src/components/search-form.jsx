import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Choose City.."
          onChange={this.handleInputChange}
        />
        <button
          type="submit"
          value={this.state.searchText}
          onClick={() => this.props.searchLocation(this.state.searchText)}
        >
        Search
        </button>
      </div>
    );
  }
}

export default SearchForm;
