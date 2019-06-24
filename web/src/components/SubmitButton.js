import React from 'react';
import Button from '@material-ui/core/Button';

const SubmitButton = ({ submitSearch }) => {
    return(
        <Button type="button" variant="contained" color="primary" className="submit-button" onClick={submitSearch}>
            Search
        </Button>
    )
}


export default SubmitButton