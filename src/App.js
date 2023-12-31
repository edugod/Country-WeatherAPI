import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./Components/Filter";
import CountryList from "./Components/CountryList";


const App = () => {
	const [countries, setCountries] = useState([]); //os dados sao armazenados aqui
	const [newFilter, setNewFilter] = useState("");

	const handleCountryClick = (countryName) => {
		setNewFilter(countryName);
	};

	//Handle do input do usuário
	const handleChange = (setValue) => (event) => setValue(event.target.value);

	//API é chamada e dados são armazenados no estado
	useEffect(() => {
		document.title = "Weather App by Dudu";
		axios.get("https://restcountries.com/v3.1/all").then((response) => {
			setCountries(response.data);
		});
	}, []);

	//Filtro para países com base na entrada do usuário
	const filteredCountries = countries.filter((country) => {
		return country.name.common
			.toLowerCase()
			.includes(newFilter.toLowerCase());
	});
	let countryToDisplay = null;
	if (filteredCountries.length === 1) {
		countryToDisplay = filteredCountries[0];
	}

	return (
		<div>
			<Filter
				value={newFilter}
				handleChange={handleChange(setNewFilter)}
			/>
			<CountryList
				filteredCountries={filteredCountries}
				countryToDisplay={countryToDisplay}
				handleCountryClick={handleCountryClick}
			/>
		</div>
	);
};
export default App;
console.log('hoje n vai dar')
console.log('hoje n vai dar')