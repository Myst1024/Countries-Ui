import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Regions from './Regions'

const Totals = ({ countries }) => {
    const regionList = countries.map(country => country.region);
    const subRegionList = countries.map(country => country.subregion);

    return (
        <Card className="totals-card">
            <CardContent>
                <Typography className="country-name" variant="h5" component="h2">Total Countries: {countries.length}</Typography>
                <div className="totals-content">
                    <div className="regions">
                        <div className="region">
                            <Typography variant="body2" component="p">Regions:</Typography>
                            <Regions regions={regionList} />
                        </div>
                        <div className="region">
                            <Typography variant="body2" component="p">Sub-regions:</Typography>
                            <Regions regions={subRegionList} />
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default Totals