import React, { Component } from 'react';
import API from "./utils/api"
import './App.css';
import Table from './components/table'
import Search from "./components/search"


class App extends Component {
  state = {
    results: []
  };
  componentDidMount() {
    console.log("hi!")
    API.getUsers()
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err))
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <div>
        <Search search={this.state.search}
          handleInputChange={this.handleInputchange} />
        <div className="container">
          <div className="row">
            <Table
              data={this.state.results}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
