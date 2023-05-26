import React from 'react';

export default function ImagePopup(props) {
  return (
    <figure className={`popup popup_image ${props.card.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__image-container">
        <button
          className="popup__close-button"
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}></button>
        <img className="popup__scale-photo" src={props.card.link} alt={props.card.name} />
        <figcaption className="popup__subtitle">{props.card.name}</figcaption>
      </div>
    </figure>
  );
}
