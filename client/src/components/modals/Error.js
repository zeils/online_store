import React from "react";
import {Modal, Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";





export const Error = observer(({show, onHide, message}) => {

    return (

        <Modal show={show} onHide={onHide} animation={false}>
        <Modal.Header closeButton>
            <Modal.Title>Ошибка!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {message}
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>

      );
  })