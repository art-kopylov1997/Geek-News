import React from "react";
import styles from "./NewsContainer.module.scss";
import harryPotter from "../../assets/img/newsContainer/harryPotter.jpg";

const NewsContainer = () => (
  <div className={styles.root}>
    <div className={styles.picture}>
      <img src={harryPotter} alt="Гарри Поттер: 20 лет спустя" />
    </div>
    <div className={styles.description}>
      <h2>
        Что показали в «Гарри Поттер 20 лет спустя: Возвращение в Хогвартс»
      </h2>
      <p>
        С момента выхода первого фильма о Гарри Поттере прошло уже 20 лет. В
        честь этого был анонсирован проект на HBO Max, получивший название
        «Гарри Поттер 20 лет спустя: Возвращение в Хогвартс» (Harry Potter 20th
        Anniversary: Return to Hogwarts). В России фильм вышел одновременно со
        всем миром — 1 января 2022 года. Посмотреть его можно на стриминговом
        сервисе Amediateka.
      </p>
      <p>
        Сразу развею все мифы — это не новый фильм о Гарри Поттере. Первый
        трейлер со взрослыми актерами четко давал понять — «20 лет спустя» будет
        красивым интервью, а не художественным произведением.
      </p>
    </div>
  </div>
);

export default NewsContainer;
