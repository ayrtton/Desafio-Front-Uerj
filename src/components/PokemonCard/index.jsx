import PropTypes from 'prop-types';

import './index.scss';

const PokemonCard = ({ image, name, types, onClick, abilities }) => {
  return (
    <div className="pokemon-card">
      <div className="pokemon-card__image-container">
        <img alt={name} className="pokemon-card__image" src={image} />
        <button className="pokemon-card__button" onClick={onClick}>
          Adicionar ao carrinho
        </button>
      </div>
      <div className="pokemon-card__content">
        <p className="pokemon-card__name">{name}</p>
        <p className="pokemon-card__info">
          Tipos: {types.map((type) => type.name).join(', ')}
        </p>
        <p className="pokemon-card__info">
          Habilidades: {abilities.map((ability) => ability.name).join(', ')}
        </p>
      </div>
    </div>
  );
};

PokemonCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  abilities: PropTypes.array.isRequired,
};

export default PokemonCard;
