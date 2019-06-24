import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import SearchType from './components/SearchType';
import SearchBar from './components/SearchBar';
import SubmitButton from './components/SubmitButton';
import CountryList from './components/CountryList';
import Totals from './components/Totals';
import Paper from '@material-ui/core/Paper';

function submitSearch(e, type, query, setCountries) {
	e.preventDefault();
	axios.get(`http://localhost:3001/?type=${type}&query=${query}`)
		.then(response => {
			if (response.data.error) {
				setCountries([]);
				console.log(response.data.error);
			} else {
				let countries = response.data;
				// Accounting for differing formatting of results from REST Countries API
				countries = Array.isArray(countries) ? countries : [countries]
				console.log(countries);
				setCountries(countries);
			}
		})
}

const App = () => {

	const [searchType, setSearchType] = useState("name");
	const [query, setQuery] = useState("");
	const [countries, setCountries] = useState([]);

	return (
		<div className="App">
			<Header />
			<Paper className="search-paper">
				<SearchType searchType={searchType} setSearchType={setSearchType} />
				<form className="search" onSubmit={(e) => submitSearch(e, searchType, query, setCountries)} noValidate>
					<SearchBar searchType={searchType} query={query} setQuery={setQuery} />
					<SubmitButton submitSearch={(e) => submitSearch(e, searchType, query, setCountries)}/>
				</form>
			</Paper>
			<CountryList countries={countries} />
			{countries.length > 0 &&
				<Totals countries={countries} />
			}
		</div>
	);
}

export default App;
