import React from 'react';

export default function PopupWithForm(props) {
  return (
    <div className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={props.name} noValidate>
          {props.children}
          <button className="popup__save-button" type="submit" aria-label="Сохранить">
            {props.buttonText}
          </button>
        </form>
        <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
      </div>
    </div>
  );
}
