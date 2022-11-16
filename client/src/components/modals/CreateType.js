
import React, { useState, useContext } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { createType, fetchTypes } from "../../http/productAPI";
import { Context } from "../..";


export const CreateType = (({show, onHide}) => {
  const {product} = useContext(Context)
  const [value, setValue] = useState()
  const addType = () => {
      createType({name: value}).then(data => {
      setValue()
      onHide()
      fetchTypes().then(data => product.setTypes(data))

    })

  }

    return (

          <Modal show={show} onHide={onHide} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Добавить тип товара</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control 
                      placeholder="Введите тип товара"
                      value={value}
                      onChange={e => setValue(e.target.value)}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={onHide}>
                Закрыть
              </Button>
              <Button variant="primary" onClick={addType}>
                Добавить
              </Button>
            </Modal.Footer>
          </Modal>

      );
  })

