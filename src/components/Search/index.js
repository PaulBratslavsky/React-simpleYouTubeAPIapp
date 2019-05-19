import React, { Component } from 'react'

class Search extends Component {

  state = {
    term: '',
    placeholder: 'Enter search term...'
  }

  onInputChange = (e) => {
    this.setState({
      term: e.target.value
    });
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    // send search term to App component to use to retrive data from youtube API
    this.props.onTermSubmit(this.state.term);
    
    // reset text field value on form submit
    this.setState({
      term: ''
    });

    this.props.clearVideoSelect();
    console.log('Form Submitted');
  }
  render() {
    console.log(this.state.term);
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <input 
              onChange={this.onInputChange} 
              type="text" 
              placeholder={this.state.placeholder} 
              value={this.state.term}></input>
          </div>
        </form>
      </div>
    )
  }
}

export default Search;