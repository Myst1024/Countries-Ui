import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Country = ({ country }) => {

    return(
        <Card className="country-card">
            <CardContent>
                <Typography className="country-name" variant="h5" component="h2">{country.name}</Typography>
                <div className="country-details">
                    <div className="country-flag">
                        <img alt="flag" src={country.flag} />
                    </div>
                    <div className="country-data">
                        <Typography variant="body2" component="p">Alpha 2: {country.alpha2Code}</Typography>
                        <Typography variant="body2" component="p">Alpha 3: {country.alpha3Code}</Typography>
                        <Typography variant="body2" component="p">Region: {country.region}</Typography>
                        <Typography variant="body2" component="p">Subregion: {country.subregion}</Typography>
                        <Typography variant="body2" component="p">Population: {country.population.toLocaleString()}</Typography>
                        <Typography variant="body2" component="p">Languages:</Typography>
                        <ul className="language-list">
                            {country.languages.map((language) => {
                                return <Typography variant="body2" component="li" key={language.name}>{language.name}</Typography>
                            }
                            )}
                        </ul>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default Country