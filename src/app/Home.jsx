import '@/styles/App.scss';
import './Home.scss';

import pokemon from '@/assets/cover-pokemon.png';
import CartSidebar from '@/components/CartSidebar';
import PokemonCard from '@/components/PokemonCard';
const pokemons = [
  {
    abilities: [{ name: 'Raio' }, { name: 'Choque' }],
    image: pokemon,
    name: 'Pikachu',
    types: [{ name: 'Eletrico' }, { name: 'Fogo' }],
  },
  {
    abilities: [{ name: 'Raio' }, { name: 'Choque' }],
    image: pokemon,
    name: 'Pikachu',
    types: [{ name: 'Eletrico' }, { name: 'Fogo' }],
  },
  {
    abilities: [{ name: 'Raio' }, { name: 'Choque' }],
    image: pokemon,
    name: 'Pikachu',
    types: [{ name: 'Eletrico' }, { name: 'Fogo' }],
  },
  {
    abilities: [{ name: 'Raio' }, { name: 'Choque' }],
    image: pokemon,
    name: 'Pikachu',
    types: [{ name: 'Eletrico' }, { name: 'Fogo' }],
  },
  {
    abilities: [{ name: 'Raio' }, { name: 'Choque' }],
    image: pokemon,
    name: 'Pikachu',
    types: [{ name: 'Eletrico' }, { name: 'Fogo' }],
  },
  {
    abilities: [{ name: 'Raio' }, { name: 'Choque' }],
    image: pokemon,
    name: 'Pikachu',
    types: [{ name: 'Eletrico' }, { name: 'Fogo' }],
  },
  {
    abilities: [{ name: 'Raio' }, { name: 'Choque' }],
    image: pokemon,
    name: 'Pikachu',
    types: [{ name: 'Eletrico' }, { name: 'Fogo' }],
  },
  {
    abilities: [{ name: 'Raio' }, { name: 'Choque' }],
    image: pokemon,
    name: 'Pikachu',
    types: [{ name: 'Eletrico' }, { name: 'Fogo' }],
  },
  {
    abilities: [{ name: 'Raio' }, { name: 'Choque' }],
    image: pokemon,
    name: 'Pikachu',
    types: [{ name: 'Eletrico' }, { name: 'Fogo' }],
  },
  {
    abilities: [{ name: 'Raio' }, { name: 'Choque' }],
    image: pokemon,
    name: 'Pikachu',
    types: [{ name: 'Eletrico' }, { name: 'Fogo' }],
  },
  {
    abilities: [{ name: 'Raio' }, { name: 'Choque' }],
    image: pokemon,
    name: 'Pikachu',
    types: [{ name: 'Eletrico' }, { name: 'Fogo' }],
  },
  {
    abilities: [{ name: 'Raio' }, { name: 'Choque' }],
    image: pokemon,
    name: 'Pikachu',
    types: [{ name: 'Eletrico' }, { name: 'Fogo' }],
  },
  {
    abilities: [{ name: 'Raio' }, { name: 'Choque' }],
    image: pokemon,
    name: 'Pikachu',
    types: [{ name: 'Eletrico' }, { name: 'Fogo' }],
  },
  {
    abilities: [{ name: 'Raio' }, { name: 'Choque' }],
    image: pokemon,
    name: 'Pikachu',
    types: [{ name: 'Eletrico' }, { name: 'Fogo' }],
  },
  {
    abilities: [{ name: 'Raio' }, { name: 'Choque' }],
    image: pokemon,
    name: 'Pikachu',
    types: [{ name: 'Eletrico' }, { name: 'Fogo' }],
  },
  {
    abilities: [{ name: 'Raio' }, { name: 'Choque' }],
    image: pokemon,
    name: 'Pikachu',
    types: [{ name: 'Eletrico' }, { name: 'Fogo' }],
  },
  {
    abilities: [{ name: 'Raio' }, { name: 'Choque' }],
    image: pokemon,
    name: 'Pikachu',
    types: [{ name: 'Eletrico' }, { name: 'Fogo' }],
  },
  {
    abilities: [{ name: 'Raio' }, { name: 'Choque' }],
    image: pokemon,
    name: 'Pikachu',
    types: [{ name: 'Eletrico' }, { name: 'Fogo' }],
  },
  {
    abilities: [{ name: 'Raio' }, { name: 'Choque' }],
    image: pokemon,
    name: 'Pikachu',
    types: [{ name: 'Eletrico' }, { name: 'Fogo' }],
  },
  {
    abilities: [{ name: 'Raio' }, { name: 'Choque' }],
    image: pokemon,
    name: 'Pikachu',
    types: [{ name: 'Eletrico' }, { name: 'Fogo' }],
  },
  {
    abilities: [{ name: 'Raio' }, { name: 'Choque' }],
    image: pokemon,
    name: 'Pikachu',
    types: [{ name: 'Eletrico' }, { name: 'Fogo' }],
  },
  {
    abilities: [{ name: 'Raio' }, { name: 'Choque' }],
    image: pokemon,
    name: 'Pikachu',
    types: [{ name: 'Eletrico' }, { name: 'Fogo' }],
  },
  {
    abilities: [{ name: 'Raio' }, { name: 'Choque' }],
    image: pokemon,
    name: 'Pikachu',
    types: [{ name: 'Eletrico' }, { name: 'Fogo' }],
  },
  {
    abilities: [{ name: 'Raio' }, { name: 'Choque' }],
    image: pokemon,
    name: 'Pikachu',
    types: [{ name: 'Eletrico' }, { name: 'Fogo' }],
  },
];

function App() {
  return (
    <div className="home">
      <h1 className="home__title">Pokémons</h1>
      <div className="home__list-grid">
        {pokemons.map((pokemon) => (
          <PokemonCard
            abilities={pokemon.abilities}
            image={pokemon.image}
            key={pokemon.name}
            name={pokemon.name}
            onClick={() => {
              console.log('teste');
            }}
            types={pokemon.types}
          />
        ))}
      </div>
      <CartSidebar />
    </div>
  );
}

export default App;
