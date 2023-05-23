function Main() {
  return (
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
  );
}

export default Main;