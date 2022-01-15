import React from "react";
import {Button, Form, Modal} from "react-bootstrap";

const ModalWindow = ({show, onHide}) => {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Log in</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group className="form-group">
                        <Form.Label>Адрес электронной почты</Form.Label>
                        <Form.Control type="email" placeholder="Введите email" />
                        <Form.Text>Мы никому не передадим ваш Email.</Form.Text>
                    </Form.Group>
                    <Form.Group className="form-group">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Введите пароль" />
                    </Form.Group>
                    <Form.Group className="form-group">
                        <Form.Check type="checkbox" label="Запомните меня" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={onHide}>
                    Log in
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalWindow;