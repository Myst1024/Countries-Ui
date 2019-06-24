import React from 'react';
import TextField from '@material-ui/core/TextField';

const SearchBar = ({ query, setQuery, searchType }) => {
    function handleChange(event){
        setQuery(event.target.value);
    }

    // cleaning up format of search bar label
    const friendlyTypeName = searchType === "fullName" ? "full name" : searchType;

    return(
        <TextField
            id="search-bar"
            label={friendlyTypeName}
            className={"searchInput"}
            value={query}
            onChange={handleChange}
            margin="normal"
        />
    )
}

export default SearchBar