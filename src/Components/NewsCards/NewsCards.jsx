import React from "react";
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import styles from './NewsCards.module.scss';

import image1 from '../../assets/img/newsCardImg1.png';
import image2 from '../../assets/img/newsCardImg2.png';
import image3 from '../../assets/img/newsCardImg3.png';

const CARDS = [
    {
        image: image1,
        title: "Uncharted в кино!",
        description: "В сети уже появился новый трейлер",
    },
    {
        image: image2,
        title: "Неожиданный сюрприз от Marvel",
        description: "Мультивселенная паучка",
    },
    {
        image: image3,
        title: "The Board Game",
        description: "Настолка от серии игр Dark Souls",
    }
]

const NewsCards = () => (
    <Container className={styles.root}>
        <Row>
            {
                CARDS.map(card => (
                    <Col className={styles.wrapper} key={card.title}>
                        <Card className={styles.cardNews}>
                            <Card.Img variant="top" src={card.image}/>
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text>{card.description}</Card.Text>
                                    <Button variant="primary">Читать далее</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    </Container>
)

export default NewsCards;