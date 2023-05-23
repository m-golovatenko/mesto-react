import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <body className="root">
      <div className="page">
        <Header />
        <Main />
        <Footer />

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
