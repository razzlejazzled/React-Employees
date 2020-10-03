import React, { Component } from "react";
import Header from "./components/header";
import Search from "./components/search";
import Table from "./components/table";
import "./App.css";
import API from "./utils/api";

class App extends Component {
  state = {
    search: "",
    employees: [],
  };

  componentDidMount() {
    API.getUsers().then(({ data }) => {
      this.setState({
        employees: data.results.map((employee) => ({
          id: employee.login.uuid,
          name: `${employee.name.first} ${employee.name.last}`,
          phone: employee.phone,
          email: employee.email,
          image: employee.picture.medium,
          dob: employee.dob.date,
          location: employee.location.city
          
        })),
      });
    });
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  filterEmployees = (employee) => {
    const { search } = this.state;
    if (!search) return true;

    for (const key in employee) {
      if (employee[key].toLowerCase().includes(search.toLowerCase()))
        return true;
    }

    return false;
  };

  render() {
    const { employees } = this.state;

    return (
      <div>
        <Header />
        <p>{this.state.search}</p>
        <Search
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <div className="container">
          <div className="row">
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">DOB</th>
                  <th scope="location">Location</th>
                </tr>
              </thead>
              <tbody>
                {employees.length &&
                  employees.filter(this.filterEmployees).map((employee) => (
                    <tr key={employee.id}>
                      <Table
                        id={employee.id}
                        img={employee.image}
                        name={employee.name}
                        phone={employee.phone}
                        email={employee.email}
                        dob={employee.dob}
                        location={employee.location}
                      />
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;