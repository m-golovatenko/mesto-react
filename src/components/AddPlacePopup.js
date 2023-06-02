import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function AddPlacePopup(props) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleLinkChange(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onAddPlace({ name, link });
  }

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [props.isOpen]);

  return (
    <PopupWithForm
      name="add"
      title="Новое Место"
      buttonText={props.loading ? 'Coхранение...' : 'Сохранить'}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}>
      <input
        id="popup__input-title"
        className="popup__input popup__input_type_title"
        type="text"
        name="title"
        placeholder="Название"
        value={name}
        onChange={handleNameChange}
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
        value={link}
        onChange={handleLinkChange}
        required
      />
      <span className="popup__input-error popup__input-link-error"></span>
    </PopupWithForm>
  );
}
