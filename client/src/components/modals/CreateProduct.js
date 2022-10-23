import React, { useContext } from "react";
import { Form, Modal, Button, Dropdown, FormControl } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import { Context } from "../..";
import {Col, Row} from "react-bootstrap"
import { useState } from "react";



export const CreateProduct = ({show, onHide}) => {
    const {product} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () =>{
        setInfo([...info, {title:'', description:'', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const cleanForm = () => {
        setInfo([])
    }

    return (

          <Modal show={show} onHide={onHide} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Добавить товар</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-3">
                        <DropdownToggle>
                            Выберите тип
                        </DropdownToggle>
                        <DropdownMenu>
                            {product.types.map(type =>
                                <DropdownItem key={type.id}>{type.name}</DropdownItem>
                                
                            )}
                        </DropdownMenu>
                    </Dropdown>
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите название товара"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите цену товара"
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        
                        type="file"
                    />
                    <hr></hr>
                    <Button variant="outline-dark" onClick={addInfo}>
                        Добавить новое свойство
                    </Button>
                    {info.map(i =>
                        <Row className="mt-3">
                            <Col md={4}>
                                <FormControl
                                    placeholder="Введите название свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <FormControl
                                    placeholder="Описание"
                                />
                            </Col>
                        </Row>
                        
                        
                    )}
                    
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={cleanForm}>
                Очистить
              </Button>
              <Button variant="secondary" onClick={onHide}>
                Закрыть
              </Button>
              <Button variant="primary" onClick={onHide}>
                Добавить
              </Button>
            </Modal.Footer>
          </Modal>

      );
  }

