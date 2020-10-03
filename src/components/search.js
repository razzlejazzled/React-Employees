import React from "react";

function Search(props){
    return(
        <form>
            <input
            className = "searchBar"
            value = {props.search}
            onChange = {props.handleInputChange}
            name = "search"
            type = "text">
            </input>
        </form>
    )
}

export default Search;
