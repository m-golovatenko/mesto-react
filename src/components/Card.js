import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="card">
      <button className="card__delete-button" aria-label="Нравится"></button>
      <img
        className="card__place"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <div className="card__flex">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-box">
          <button className="card__like-button" aria-label="Нравится"></button>
          <p className="card__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}
