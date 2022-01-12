import React from "react";
import {Card} from "react-bootstrap";
import styles from './About.module.scss';

import aboutImg1 from '../../assets/img/about-1.jpg';
import aboutImg2 from '../../assets/img/about-2.jpg';
import aboutImg3 from '../../assets/img/about-3.jpg';

const CREATORS = [
    {
        photo: aboutImg1,
        name: 'АРТЁМ',
        contacts: 'Телефон: +7 977 803 98-97',
        description: 'Начинающий frontend-разработчик. Изучает и практикует такие языки программирования как CSS, ' +
            'JavaScript, React. Создатель данного сайта. Сайт в свою очередь является творческим проектом для своего портфолио. ' +
            'Идеей и дизайном частично вдохновлялся от реально существующих сайтов, посвященных играм, фильмам и прочему.',
    },
    {
        photo: aboutImg2,
        name: 'МАРК (Джесси)',
        contacts: 'Instagram: jesseeisenbergunofficial',
        description: 'Актер, сыгравший в фильме "Социальная сеть" будущего американскаго медиамагната, ' +
            'интернет-предпринимателя и филантропа. Здесь он просто для массовки.',
    },
    {
        photo: aboutImg3,
        name: 'ЭДУАРДО (Эндрю)',
        contacts: 'Instagram: andrew_garfield83',
        description: 'Американо-британский актёр. Лауреат премии «Тони», а также номинант на премии «Оскар», ' +
            '«Золотой глобус» и BAFTA. Также тут он выполнянет роль массовки. ',
    },
]

const About = () => {
    return (
            <div className={styles.root}>
                {
                    CREATORS.map(creator => (
                        <div className={styles.wrapper} key={creator.name}>
                            <div className={styles.blockAbout}>
                                <Card className={styles.cardAbout}>
                                    <Card.Img variant="top" src={creator.photo}/>
                                    <Card.Body>
                                        <Card.Title>{creator.name}</Card.Title>
                                        <Card.Text>{creator.contacts}</Card.Text>
                                    </Card.Body>
                                </Card>
                                <p className={styles.descriptionAbout}>{creator.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
    )
}

export default About;