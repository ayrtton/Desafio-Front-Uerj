import '@/styles/App.scss';
import './Home.scss';

import CartSidebar from '@/components/CartSidebar';
import PokemonCard from '@/components/PokemonCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [pokemonList, setPokemonList] = useState(null);

  async function getPokemonList() {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
    const results = response.data.results;
    const resultPromise = results.map((pokemon) => axios.get(pokemon.url));
    const pokemonData = await axios.all(resultPromise);
    
    const res = pokemonData.map((pokemonData) => {
      const pokemon = pokemonData.data;

      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other.dream_world.front_default,
        gif: pokemon.sprites.other.dream_world.front_default,
        types: pokemon.types,
        abilities: pokemon.abilities
      }
    });

    setPokemonList(res);
  }

  useEffect(() => {
    getPokemonList();
  },[]);

  return (
    <div className="home">
      <h1 className="home__title">Pokémon</h1>
      <div className="home__list-grid">
        {pokemonList && pokemonList.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            types={pokemon.types}
            abilities={pokemon.abilities}
            onClick={() => {
              console.log(pokemon);
            }}
          />
        ))}
      </div>
      <CartSidebar />
    </div>
  );
}

export default App;
