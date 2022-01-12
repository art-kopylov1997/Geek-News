import React, { useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';
import ModalWindow from '../UI/ModalWindow/ModalWindow';

import logoPng from '../../assets/icon/logo.png';

const NavBar = () => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <NavLink to="/">
                            <img src={logoPng} alt="logo"/>
                        </NavLink>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink  to="/">Home</NavLink>
                        <NavLink to="/users">Users</NavLink>
                        <NavLink to="/about">About</NavLink>
                    </Nav>
                    <Nav>
                        <Button className={styles.buttons} variant="primary" onClick={handleShow}>
                            Log In
                        </Button>
                        <Button className={styles.buttons} variant="primary" onClick={handleShow}>
                            Sign out
                        </Button>
                    </Nav>
                </Container>
            </Navbar>

            <ModalWindow show={show} onHide={handleClose} />
        </>
    );
}

export default NavBar;