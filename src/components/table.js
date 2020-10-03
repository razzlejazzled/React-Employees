import React from "react";
import "../styles/table.css";

function Table(props) {
    // console.log(props)
    return (
        <>
            <th scope="row"><img className="personImage" alt={props.name} src={props.img} /></th>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
        </>
    )
}

export default Table;