import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

// Provides the radio buttons users choose to specify their query type
const SearchType = ({ searchType, setSearchType }) => {
    function handleChange(event){
        setSearchType(event.target.value)
    }

    return(
        <div className="search-type">
            <FormControl component="fieldset">
                <FormLabel component="legend">Search By:</FormLabel>
                <RadioGroup
                    aria-label="Search By"
                    name="searchBy"
                    value={searchType}
                    onChange={handleChange}
                >
                    <FormControlLabel value="name" control={<Radio />} label="Name" />
                    <FormControlLabel value="fullName" control={<Radio />} label="Full Name" />
                    <FormControlLabel value="code" control={<Radio />} label="Code (2 or 3 digit)" />
                </RadioGroup>
            </FormControl>
        </div>
    )
}

export default SearchType