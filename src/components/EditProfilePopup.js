import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function EditProfilePopup(props) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateUser({
      name,
      about: description
    });
  }

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      buttonText={props.loading ? 'Coхранение...' : 'Сохранить'}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}>
      <input
        id="popup__input-name"
        className="popup__input popup__input_type_name"
        type="text"
        name="name"
        placeholder="Имя"
        value={name || ''}
        onChange={handleNameChange}
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
        value={description || ''}
        onChange={handleDescriptionChange}
        minLength="2"
        maxLength="200"
        required
      />
      <span className="popup__input-error popup__input-occupation-error"></span>
    </PopupWithForm>
  );
}
