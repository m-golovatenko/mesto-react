import React from 'react';
import { api } from '../utils/api';
import userAvatar from '../images/profile__avatar.png';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userOccupation, setUserOccupation] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  React.useEffect(() => {
    Promise.all([
      api.getUserInfo({ name: userName, occupation: userOccupation, avatar: userAvatar }),
      api.getInitialCards()
    ])
      .then(([userData, cardData]) => {
        setUserName(userData.name);
        setUserOccupation(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch(err => console.error(`Что-то пошло не так: ${err}`));
  });

  return (
    <main className="container">
      <section className="profile">
        <div
          className="profile__avatar-overlay"
          onClick={props.onEditAvatar}
          onClose={props.closeAllPopups}>
          <img
            src={userAvatar}
            alt="Улыбающийся мужчина в красной шапке."
            className="profile__avatar"
          />
        </div>
        <div className="profile__info">
          <div className="profile__flex">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Редактировать"
              onClick={props.onEditProfile}
              onClose={props.closeAllPopups}></button>
          </div>
          <p className="profile__occupation">{userOccupation}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить карточку"
          onClick={props.onAddCard}
          onClose={props.closeAllPopups}></button>
      </section>
      <section className="photos">
        <template className="card__template">
          <div className="card">
            <button className="card__delete-button" aria-label="Нравится"></button>
            <img className="card__place" />
            <div className="card__flex">
              <h2 className="card__title"></h2>
              <div className="card__like-box">
                <button className="card__like-button" aria-label="Нравится"></button>
                <p className="card__like-counter">0</p>
              </div>
            </div>
          </div>
        </template>
      </section>

      <figure className="popup popup_photo-scale">
        <div className="popup__photo-scale-container">
          <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
          <img className="popup__scale-photo" />
          <figcaption className="popup__subtitle"></figcaption>
        </div>
      </figure>
    </main>
  );
}

export default Main;
