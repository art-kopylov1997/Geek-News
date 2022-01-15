import React from "react";
import {Carousel} from "react-bootstrap";
import styles from './Slider.module.scss';

import image1 from '../../assets/img/sliderImg1.png';
import image2 from '../../assets/img/sliderImg2.png';
import image3 from '../../assets/img/sliderImg3.png';

const SLIDERS = [
    {
        image: image1,
        alt: "Forza Horizon 5",
        title: "Forza Horizon 5: обновление",
        description: "Playground Games рассказала о добавлении контента в Forza Horizon 5 в ближайшее время",
    },
    {
        image: image2,
        alt: "GTA Online",
        title: "GTA Online — САМАЯ ПОПУЛЯРНАЯ ИГРА 2021",
        description: "В уходящем году просмотры трансляций Twitch увеличились на 45 % по сравнению с 2020-м",
    },
    {
        image: image3,
        alt: "THE WITCHER",
        title: "THE WITCHER: 3 WILD HUNT — трудности перевода",
        description: "Какая из 3 локализаций наиболее близка к оригинальному произведению Сапковского",
    },
]

const Slider = () => (
    <Carousel className={styles.root}>
        {
            SLIDERS.map(slider => (
                <Carousel.Item key={slider.title}>
                    <img
                        src={slider.image}
                        alt={slider.alt}
                    />
                    <Carousel.Caption className={styles.carouselCaption}>
                        <h2>{slider.title}</h2>
                        <p>{slider.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))
        }
    </Carousel>
);

export default Slider;