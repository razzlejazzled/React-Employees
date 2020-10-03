import React from "react";


function Table(props) {
    return (<table className="table table-hover">
        <thead>
            <tr>
                <th scope="col">Image</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">City</th>
                <th scope="col">Email</th>
            </tr>
        </thead>
        <tbody>
        {this.state.employees.map(employee => (
            <tr>
                <th scope="row"><img className="personImage" alt={props.name} src={props.image} /></th>
                <td>{props.name}</td>
                <td>{props.location}</td>
                <td>{props.email}</td>
            </tr>
         ))}
        </tbody>
    </table>
    )
}
export default Table