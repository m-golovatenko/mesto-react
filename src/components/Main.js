import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="container">
      <section className="profile">
        <div
          className="profile__avatar-overlay"
          onClick={props.onEditAvatar}
          onClose={props.closeAllPopups}>
          <img
            src={currentUser.avatar}
            alt="Изображение пользователя."
            className="profile__avatar"
          />
        </div>
        <div className="profile__info">
          <div className="profile__flex">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Редактировать"
              onClick={props.onEditProfile}
              onClose={props.closeAllPopups}
            />
          </div>
          <p className="profile__occupation">{currentUser.about}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить карточку"
          onClick={props.onAddCard}
          onClose={props.closeAllPopups}
        />
      </section>

      <section className="photos">
        {props.cards.map(card => (
          <Card
            key={card._id}
            onCardClick={props.onCardClick}
            card={card}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
