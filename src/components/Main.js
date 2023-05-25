import PopupWithForm from './PopupWithForm';

function Main() {
  function handleEditAvatarClick() {
    const popupEditAvatar = document.querySelector('.popup_change-avatar');
    popupEditAvatar.classList.add('popup_opened');
  }
  function handleEditProfileClick() {
    const popupEditProfile = document.querySelector('.popup_edit');
    popupEditProfile.classList.add('popup_opened');
  }
  function handleAddPlaceClick() {
    const popupAddCard = document.querySelector('.popup_add');
    popupAddCard.classList.add('popup_opened');
  }
  return (
    <main className="container">
      <section className="profile">
        <div className="profile__avatar-overlay" onClick={handleEditAvatarClick}>
          <img
            src="<%=require('../images/profile__avatar.png')%>"
            alt="Улыбающийся мужчина в красной шапке."
            className="profile__avatar"
          />
        </div>
        <div className="profile__info">
          <div className="profile__flex">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Редактировать"
              onClick={handleEditProfileClick}></button>
          </div>
          <p className="profile__occupation">Исследователь океана</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить карточку"
          onClick={handleAddPlaceClick}></button>
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

      <PopupWithForm name="edit" title="Редактировать профиль" buttonText="Сохранить">
        <input
          id="popup__input-name"
          className="popup__input popup__input_type_name"
          type="text"
          name="name"
          placeholder="Имя"
          minlength="2"
          maxlength="40"
          required
        />
        <span className="popup__input-error popup__input-name-error"></span>

        <input
          id="popup__input-occupation"
          className="popup__input popup__input_type_occupation"
          type="text"
          placeholder="О себе"
          name="occupation"
          minlength="2"
          maxlength="200"
          required
        />
        <span className="popup__input-error popup__input-occupation-error"></span>
      </PopupWithForm>

      <PopupWithForm name="add" title="Новое Место" buttonText="Сохранить">
        <input
          id="popup__input-title"
          className="popup__input popup__input_type_title"
          type="text"
          name="title"
          placeholder="Название"
          minlength="2"
          maxlength="30"
          required
        />
        <span className="popup__input-error popup__input-title-error"></span>

        <input
          id="popup__input-link"
          className="popup__input popup__input_type_link"
          type="url"
          name="link"
          placeholder="Ссылка на изображение"
          required
        />
        <span className="popup__input-error popup__input-link-error"></span>
      </PopupWithForm>

      <PopupWithForm name="change-avatar" title="Обновить аватар" buttonText="Сохранить">
        <input
          type="url"
          name="avatar"
          id="popup__input-avatar"
          className="popup__input popup__input_type_avatar"
          placeholder="Ссылка на новый аватар"
          required
        />
        <span className="popup__input-error popup__input-avatar-error"></span>
      </PopupWithForm>

      <PopupWithForm name="delete-card" title="Вы уверены?" buttonText="Да" />

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
