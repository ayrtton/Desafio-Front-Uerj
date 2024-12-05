import { createContext, useEffect, useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
	const [pokemonTeam, setPokemonTeam] = useState(localStorage.getItem('pokemonTeam') ? JSON.parse(localStorage.getItem('pokemonTeam')) : []);

	const addToTeam = (newPokemon) => {
		const isInTeam = pokemonTeam.find((includedPokemon) => includedPokemon.id === newPokemon.id); 

		if(!isInTeam && pokemonTeam.length < 6) {
			setPokemonTeam([...pokemonTeam, newPokemon]);
		}
	};

	const removeFromTeam = (pokemonToRemove) => {
		setPokemonTeam(pokemonTeam.filter((includedPokemon) => includedPokemon.id !== pokemonToRemove.id));
	};

  const clearTeam = () => {
    setPokemonTeam([]);
  };

	useEffect(() => {
    const pokemonTeam = localStorage.getItem("pokemonTeam");

    if (pokemonTeam) {
    	setPokemonTeam(JSON.parse(pokemonTeam));
    }
	}, []);

	useEffect(() => {
		localStorage.setItem("pokemonTeam", JSON.stringify(pokemonTeam));
	}, [pokemonTeam]);

	return (
		<PokemonContext.Provider value={{ pokemonTeam, addToTeam, removeFromTeam, clearTeam }}>
			{children}
		</PokemonContext.Provider>
	);
}