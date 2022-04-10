import React from "react";
import { Card } from "react-bootstrap";
import styles from "./About.module.scss";

import artyom from "../../assets/img/about/artyom.jpg";
import mark from "../../assets/img/about/mark.jpg";
import eduardo from "../../assets/img/about/eduardo.jpg";

const MEMBERS = [
  {
    photo: artyom,
    name: "АРТЁМ",
    contacts: "Телефон: +7 977 803 98-97",
    description:
      "Frontend-разработчик данного сайта. Сайт в свою очередь является творческим проектом для своего портфолио. " +
      "Идеей и дизайном частично вдохновлялся от реально существующих сайтов, посвященных играм и фильмам.",
  },
  {
    photo: mark,
    name: "МАРК (Джесси)",
    contacts: "Instagram: jesseeisenbergunofficial",
    description:
      'Актер, сыгравший в фильме "Социальная сеть" будущего американскаго медиамагната, ' +
      "интернет-предпринимателя и филантропа. Здесь он просто для массовки.",
  },
  {
    photo: eduardo,
    name: "ЭДУАРДО (Эндрю)",
    contacts: "Instagram: andrew_garfield83",
    description:
      "Американо-британский актёр. Лауреат премии «Тони», а также номинант на премии «Оскар», " +
      "«Золотой глобус» и BAFTA. Также тут он выполнянет роль массовки. ",
  },
];

const About = () => (
  <div className={styles.root}>
    {MEMBERS.map((member) => (
      <div key={member.name} className={styles.cardWrapper}>
        <Card className={styles.cardAbout}>
          <Card.Img variant="top" src={member.photo} />

          <Card.Body>
            <Card.Title>{member.name}</Card.Title>
            <Card.Text>{member.contacts}</Card.Text>
          </Card.Body>
        </Card>

        <p className={styles.description}>{member.description}</p>
      </div>
    ))}
  </div>
);

export default About;
