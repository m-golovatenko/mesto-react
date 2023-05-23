function App() {
  return (
    <body className="root">
      <div className="page">
        <header className="header ">
          <a className="header__logo" href="#" target="_blank"></a>
        </header>

        <main className="container">
          <section className="profile">
            <div className="profile__avatar-overlay">
              <img
                src="<%=require('./images/profile__avatar.png')%>"
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
                  aria-label="Редактировать"></button>
              </div>
              <p className="profile__occupation">Исследователь океана</p>
            </div>
            <button className="profile__add-button" type="button" aria-label="Добавить"></button>
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
        </main>
        <footer className="footer">
          <p className="footer__copyright">&copy; 2023 Mesto Russia</p>
        </footer>

        <section className="popup popup_edit">
          <div className="popup__container">
            <h2 className="popup__title">Редактировать профиль</h2>
            <form className="popup__form popup__form_edit" name="edit" novalidate>
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

              <button className="popup__save-button" type="submit" aria-label="Сохранить">
                Сохранить
              </button>
            </form>
            <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
          </div>
        </section>

        <section className="popup popup_add">
          <div className="popup__container popup__container-card">
            <h2 className="popup__title">Новое Место</h2>
            <form className="popup__form popup__form_add" name="add" novalidate>
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

              <button className="popup__save-button" type="submit" aria-label="Сохранить">
                Сохранить
              </button>
            </form>
            <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
          </div>
        </section>

        <section className="popup popup_change-avatar">
          <div className="popup__container">
            <h2 className="popup__title">Обновить аватар</h2>
            <form className="popup__form popup__form_avatar" name="avatar" novalidate>
              <input
                type="url"
                name="avatar"
                id="popup__input-avatar"
                className="popup__input popup__input_type_avatar"
                placeholder="Ссылка на новый аватар"
                required
              />
              <span className="popup__input-error popup__input-avatar-error"></span>
              <button className="popup__save-button" type="submit" aria-label="Сохранить">
                Сохранить
              </button>
            </form>
            <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
          </div>
        </section>

        <section className="popup popup_delete-card">
          <div className="popup__container">
            <h2 className="popup__title">Вы уверены?</h2>
            <form className="popup__form popup__form_delete-card" name="delete" novalidate>
              <button className="popup__save-button" type="submit" aria-label="Да">
                Да
              </button>
            </form>
            <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
          </div>
        </section>

        <figure className="popup popup_photo-scale">
          <div className="popup__photo-scale-container">
            <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
            <img className="popup__scale-photo" />
            <figcaption className="popup__subtitle"></figcaption>
          </div>
        </figure>
      </div>
    </body>
  );
}

export default App;
