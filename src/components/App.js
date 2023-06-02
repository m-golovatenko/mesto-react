import React from 'react';
import Header from './Header';
import Main from './Main';
import ImagePopup from './ImagePopup';
import Footer from './Footer';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/api';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import DeleteCardPopup from './DeleteCardPopup';

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setDeleteCardPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '', isOpen: false });
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [cardToBeDeleted, setCardToBeDeleted] = React.useState({});
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardData]) => {
        setCurrentUser(userData);
        setCards(cardData);
      })
      .catch(err => console.error(`Что-то пошло не так: ${err}`));
  }, []);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddCardClick() {
    setAddPlacePopupOpen(true);
  }

  function handleDeleteCardClick(card) {
    setDeleteCardPopupOpen(true);
    setCardToBeDeleted(card);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setDeleteCardPopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard({ name: card.name, link: card.link, alt: card.name, isOpen: true });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, isLiked)
      .then(newCard => {
        setCards(state => state.map(c => (c._id === card._id ? newCard : c)));
      })
      .catch(err => console.error(`Ошибка при постановке лайка: ${err}`));
  }

  function handleCardDelete() {
    setLoading(true);
    api
      .deleteCard(cardToBeDeleted._id)
      .then(() => {
        setCards(state => state.filter(c => c._id !== cardToBeDeleted._id));
      })
      .then(() => {
        closeAllPopups();
      })
      .catch(err => console.error(`Ошибка при удалении карточки: ${err}`))
      .finally(() => {
        setLoading(false);
      });
  }

  function handleUpdateUser(userData) {
    setLoading(true);
    api
      .changeUserInfo(userData)
      .then(userData => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch(err => console.error(`Ошибка при изменении данных пользователя: ${err}`))
      .finally(() => {
        setLoading(false);
      });
  }

  function handleUpdateAvatar(avatar) {
    setLoading(true);
    api
      .changeAvatar(avatar)
      .then(avatar => {
        setCurrentUser(avatar);
        closeAllPopups();
      })
      .catch(err => console.error(`Ошибка при изменении аватара профиля: ${err}`))
      .finally(() => {
        setLoading(false);
      });
  }

  function handleAddPlaceSubmit(cardData) {
    setLoading(true);
    api
      .addCard(cardData)
      .then(newCard => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch(err => console.error(`Ошибка при добавлении карточки: ${err}`))
      .finally(() => {
        setLoading(false);
      });
  }

  React.useEffect(() => {
    function closeOnEsc(evt) {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    }

    if (
      isEditAvatarPopupOpen ||
      isEditProfilePopupOpen ||
      isAddPlacePopupOpen ||
      isDeleteCardPopupOpen
    ) {
      document.addEventListener('keydown', closeOnEsc);
    }
    return () => {
      document.removeEventListener('keydown', closeOnEsc);
    };
  }, [isEditAvatarPopupOpen, isEditProfilePopupOpen, isAddPlacePopupOpen, isDeleteCardPopupOpen]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <div className="page">
          <Header />

          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddCard={handleAddCardClick}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleDeleteCardClick}
          />

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
            loading={isLoading}
          />

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
            loading={isLoading}
          />

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
            loading={isLoading}
          />

          <DeleteCardPopup
            onClose={closeAllPopups}
            isOpen={isDeleteCardPopupOpen}
            onDeleteCard={handleCardDelete}
            loading={isLoading}
          />

          <ImagePopup card={selectedCard} onClose={closeAllPopups} />

          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
