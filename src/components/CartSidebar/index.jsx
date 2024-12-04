import { useState } from 'react';
import './index.scss';

function CartSidebar() {
  const pokemon = [
    {
      name: "Charizard",
      characteristic: "Likes to run"
    }, 
    {
      name: "Charmeleon",
      characteristic: "Strong willed"
    }
  ];
  const [pokemonList, setPokemonList] = useState(pokemon);

  const isPokemonListEmpty = () => {
    return pokemonList.length === 0;
  }

  return (
    <div className="cart-sidebar">
        <h1 className="cart-sidebar__title">Sua Equipe</h1>
        {isPokemonListEmpty() && <div className="cart-sidebar__empty-message"></div>}
        <ul className="cart-sidebar__items">
          {pokemonList.map((pokemon) => (
            <li key={pokemon.name} className="cart-sidebar__item">
              <div className="cart-sidebar__item-info">
                <div className="cart-sidebar__item-header">
                  <span className="cart-sidebar__item-x">x</span>
                  <h2 className="cart-sidebar__item-name">{pokemon.name}</h2>
                  <button className="cart-sidebar__remove-button">&#x00d7;</button>
                </div>
                <div className="cart-sidebar__item-characteristic">
                  {pokemon.characteristic}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="cart-sidebar__footer">
          <button className="cart-sidebar__checkout-button" disabled={isPokemonListEmpty()}>Confirmar Equipe</button>
        </div>
    </div>
  );
}

export default CartSidebar;
