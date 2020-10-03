import React, { Component } from 'react';
import API from "./utils/api"
import './App.css';
import Table from './components/table'



class App extends Component {
  state = {
    results: []
  };
  componentDidMount() {
    console.log("hi!")
    API.getUsers()
    .then(res =>this.setState({ results: res.data.results}))
    .catch(err => console.log(err))
  };

  handleInputChange = (event) => {
    const { name, value} = event.target;
    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <div>
        <Table
       data={this.state.results}
        />
      </div>
    )
  }
}

export default App;
