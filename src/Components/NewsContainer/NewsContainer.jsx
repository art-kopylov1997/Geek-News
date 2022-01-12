import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import styles from './NewsContainer.module.scss';

import image from '../../assets/img/newsContainerImg.jpg';

const NewsContainer = () => (
    <Container className={styles.wrapper}>
        <Row>
            <Col className={styles.columnImg}>
                <img src={image} alt="Гарри Поттер: 20 лет спустя"/>
            </Col>
            <Col className={styles.columnDescription}>
                <h2>Что показали в «Гарри Поттер 20 лет спустя: Возвращение в Хогвартс»</h2>
                <p>
                    С момента выхода первого фильма о Гарри Поттере прошло уже 20 лет. В честь этого был анонсирован
                    проект на HBO Max, получивший название «Гарри Поттер 20 лет спустя: Возвращение в Хогвартс» (Harry
                    Potter 20th Anniversary: Return to Hogwarts). В России фильм вышел одновременно со всем миром — 1
                    января 2022 года. Посмотреть его можно на стриминговом сервисе Amediateka.
                </p>
                <p>
                    Сразу развею все мифы — это не новый фильм о Гарри Поттере. Первый трейлер со взрослыми актерами
                    четко давал понять — «20 лет спустя» будет красивым интервью, а не художественным произведением.
                </p>
            </Col>
        </Row>
    </Container>
);

export default NewsContainer;