import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  //Detele button for user card
  const isOwn = props.card.owner._id === currentUser._id;

  //Check like
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = `card__like-button ${isLiked && 'card__like-button_active'}`;

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }
  return (
    <div className="card">
      {isOwn && <button className="card__delete-button" onClick={handleDeleteClick} />}
      <img
        className="card__place"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <div className="card__flex">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-box">
          <button
            className={cardLikeButtonClassName}
            aria-label="Нравится"
            onClick={handleLikeClick}></button>
          <p className="card__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}
