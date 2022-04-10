import React from "react";
import Table from "react-bootstrap/Table";
import styles from './Users.module.scss';

const USERS = [
    {
        stance: 1,
        name: "Jacobs Monarch",
        username: "jjCCOmbo43",
        points: 18900,
    },
    {
        stance: 2,
        name: "Mark Avrelly",
        username: "mARK_1",
        points: 17535,
    },
    {
        stance: 3,
        name: "Andrey Petrov",
        username: "nav__",
        points: 17100,
    },
    {
        stance: 4,
        name: "Valentin Diyad'ka",
        username: "SLAVA_CPSS",
        points: 16590,
    },
    {
        stance: 5,
        name: "Victor Smirnov",
        username: "V-vendetTA",
        points: 16200,
    },
    {
        stance: 6,
        name: "Elena Mihailova",
        username: "Lenok_32",
        points: 15770,
    },
    {
        stance: 7,
        name: "John Cena",
        username: "MIROTVORETS",
        points: 15000,
    },
    {
        stance: 8,
        name: "Margo Robbie",
        username: "hArLeY-qUiNn",
        points: 14900,
    },
    {
        stance: 9,
        name: "Will Smith",
        username: "I'm_legend",
        points: 14500,
    },
    {
        stance: 10,
        name: "Irina Shiek",
        username: "MILK-sheik77",
        points: 13010,
    },
    {
        stance: 11,
        name: "Karina Popova",
        username: "karina-strim123",
        points: 12860,
    },
    {
        stance: 12,
        name: "Valentin Strykalo",
        username: "_VVvalenki_",
        points: 12755,
    },
    {
        stance: 13,
        name: "Prohor Shalyapin",
        username: "old_School_89",
        points: 12040,
    },
    {
        stance: 14,
        name: "Evgeniy Ponasenko",
        username: "dominator3000",
        points: 12630,
    },
    {
        stance: 15,
        name: "Egor Buladkin",
        username: "__Creeng__23",
        points: 12120,
    },
]

const Users = () => (
    <>
        <div className={styles.imageContainer}/>

        <Table striped bordered hover className={styles.wrapperTable}>
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Username</th>
                <th>Points</th>
            </tr>
            </thead>

            <tbody>
            {
                USERS.map(user => (
                    <tr key={user.points}>
                        <td>{user.stance}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.points}</td>
                    </tr>
                ))
            }
            </tbody>
        </Table>
    </>
)

export default Users;