import { Button, Modal } from 'react-bootstrap'
import React from 'react'

export default function ModalUpdate({ title, children, show, setShow, onSubmit }) {
    return (
        <div>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {children}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                    <Button className="button_color" onClick={onSubmit} variant="primary">Update</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
