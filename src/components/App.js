import React from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from '../components/PopupWithForm';
import ImagePopup from './ImagePopup';
import Footer from './Footer';

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddCardPopupOpen, setAddCardPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '', isOpen: false });

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  function handleAddCardClick() {
    setAddCardPopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddCardPopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard({ name: card.name, link: card.link, alt: card.name, isOpen: true });
  }

  return (
    <div className="root">
      <div className="page">
        <Header />

        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddCard={handleAddCardClick}
          onCardClick={handleCardClick}
        />

        <PopupWithForm
          name="edit"
          title="Редактировать профиль"
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}>
          <input
            id="popup__input-name"
            className="popup__input popup__input_type_name"
            type="text"
            name="name"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="popup__input-error popup__input-name-error"></span>

          <input
            id="popup__input-occupation"
            className="popup__input popup__input_type_occupation"
            type="text"
            placeholder="О себе"
            name="occupation"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="popup__input-error popup__input-occupation-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="add"
          title="Новое Место"
          buttonText="Сохранить"
          isOpen={isAddCardPopupOpen}
          onClose={closeAllPopups}>
          <input
            id="popup__input-title"
            className="popup__input popup__input_type_title"
            type="text"
            name="title"
            placeholder="Название"
            minLength="2"
            maxLength="30"
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

        <PopupWithForm
          name="change-avatar"
          title="Обновить аватар"
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}>
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

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        <Footer />
      </div>
    </div>
  );
}

export default App;
