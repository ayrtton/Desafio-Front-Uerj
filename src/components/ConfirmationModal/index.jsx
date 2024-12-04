import './index.scss';

function ConfirmationModal({ setIsOpen }) {
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

  return (
    <div className="modal-overlay">
      <div className="confirmation-modal">
        <div className="confirmation-modal__header">
          <button className="confirmation-modal__close-button" onClick={() => setIsOpen(false)}>&#x00d7;</button>
          <div className="confirmation-modal__check">&#10004;</div>
          <h1 className="confirmation-modal__title">Equipe Formada</h1>
          <h2 className="confirmation-modal__subtitle">Sua equipe está pronta!</h2>
        </div>
        <div className="confirmation-modal__content">
          <ul className="confirmation-modal__items">
            {pokemon.map((pokemon) => (
              <ul className="confirmation-modal__item">
                <img className="confirmation-modal__item-image" src="" alt="Imagem do Pokémon" />
                <h2 className="confirmation-modal__item-name">{pokemon.name}</h2>
                <span className="confirmation-modal__item-info">{pokemon.characteristic}</span>
              </ul>
            ))}
          </ul>
          <div className="confirmation-modal__total">
            <div>Total de Pokémon na equipe</div>
            <div>{pokemon.length}</div>
          </div>
        </div>
        <button className="confirmation-modal__button" onClick={() => setIsOpen(false)}>Começar nova equipe</button>
      </div>
    </div>
  )
}

export default ConfirmationModal;