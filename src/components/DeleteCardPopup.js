import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function DeleteCardPopup(props) {
  function handleSubmit(evt) {
    evt.preventDefault();
    props.onDeleteCard();
  }

  return (
    <PopupWithForm
      name="delete-card"
      title="Вы уверены?"
      buttonText={props.loading ? 'Удаление...' : 'Да'}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    />
  );
}
