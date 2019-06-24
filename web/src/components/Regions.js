import React from 'react';

const Regions = ({ regions} ) => {
    // Creating unique list of regions
    const distinctRegions = [...new Set(regions)];
    console.log(distinctRegions);



    function regionCount (region) {
        return regions.filter(function(x){ return x === region; }).length;
    }

    return (
        <ul>
            {distinctRegions.map(region => {
                return <li key={region}>{region}: {regionCount(region)}</li>
            })}
        </ul>
    )
}

export default Regions