import React from 'react';

export default function Card({ name, link, likes }) {
  return (
    <div className="card">
      <button className="card__delete-button" aria-label="Нравится"></button>
      <img className="card__place" src={link} alt={name} />
      <div className="card__flex">
        <h2 className="card__title">{name}</h2>
        <div className="card__like-box">
          <button className="card__like-button" aria-label="Нравится"></button>
          <p className="card__like-counter">{likes}</p>
        </div>
      </div>
    </div>
  );
}
