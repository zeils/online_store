import React from "react";
import { Form, Modal, Button } from "react-bootstrap";


export const CreateType = ({show, onHide}) => {
    return (

          <Modal show={show} onHide={onHide} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Добавить тип товара</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control placeholder="Введите тип товара"/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={onHide}>
                Закрыть
              </Button>
              <Button variant="primary" onClick={onHide}>
                Сохранить
              </Button>
            </Modal.Footer>
          </Modal>

      );
  }

