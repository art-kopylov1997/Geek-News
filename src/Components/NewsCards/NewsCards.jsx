import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import styles from "./NewsCards.module.scss";

import uncharted from "../../assets/img/newsCards/uncharted.png";
import spiderMan from "../../assets/img/newsCards/spiderMan.png";
import darkSouls from "../../assets/img/newsCards/darkSouls.png";

const CARDS = [
  {
    image: uncharted,
    title: "Uncharted в кино!",
    description: "В сети уже появился новый трейлер",
  },
  {
    image: spiderMan,
    title: "Неожиданный сюрприз от Marvel",
    description: "Мультивселенная паучка",
  },
  {
    image: darkSouls,
    title: "The Board Game",
    description: "Настолка от серии игр Dark Souls",
  },
];

const NewsCards = () => (
  <Container className={styles.root}>
    <Row>
      {CARDS.map((card) => (
        <Col className={styles.cardWrapper} key={card.title}>
          <Card className={styles.newsCard}>
            <Card.Img src={card.image} />

            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.description}</Card.Text>
              <Button>Читать далее</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default NewsCards;
