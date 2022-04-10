import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "./CarouselNews.module.scss";

import forzaHorizon5 from "../../assets/img/carouselNews/forzaHorizon5.png";
import whitcher3 from "../../assets/img/carouselNews/whitcher3.png";
import gta5 from "../../assets/img/carouselNews/gta5.png";

const NEWS = [
  {
    image: forzaHorizon5,
    title: "Forza Horizon 5: обновление",
    description:
      "Playground Games рассказала о добавлении контента в Forza Horizon 5 в ближайшее время",
  },
  {
    image: whitcher3,
    title: "GTA Online — САМАЯ ПОПУЛЯРНАЯ ИГРА 2021",
    description:
      "В уходящем году просмотры трансляций Twitch увеличились на 45 % по сравнению с 2020-м",
  },
  {
    image: gta5,
    title: "THE WITCHER: 3 WILD HUNT — трудности перевода",
    description:
      "Какая из 3 локализаций наиболее близка к оригинальному произведению Сапковского",
  },
];

const CarouselNews = () => (
  <Carousel>
    {NEWS.map((newsElement) => (
      <Carousel.Item key={newsElement.title}>
        <img
          className={styles.image}
          src={newsElement.image}
          alt={newsElement.title}
        />

        <Carousel.Caption className={styles.caption}>
          <h2>{newsElement.title}</h2>
          <p>{newsElement.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
);

export default CarouselNews;
