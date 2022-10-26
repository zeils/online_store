import React, { useContext } from "react";
import { Form, Modal, Button, Dropdown, FormControl } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import { Context } from "../..";
import {Col, Row} from "react-bootstrap"
import { useState } from "react";
import { useEffect } from "react";
import { createProduct, fetchTypes } from "../../http/productAPI";
import { observer } from "mobx-react-lite";



export const CreateProduct = observer(({show, onHide}) => {
    const {product} = useContext(Context)
    const [info, setInfo] = useState([])
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [file, setFile] = useState(null)

    //useEffect (()=> {
      //  fetchTypes().then(data => product.setTypes(data))
        
    //})
    
    const selectFile = e => {
        setFile(e.target.files[0])

    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const addProduct = () => {

        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)  
        formData.append('brandId', '1')
        formData.append('typeId', `${product.selectedType.id}`)
        formData.append('info', JSON.stringify(info))
        formData.append('img', file)


       
        createProduct(formData).then(data => onHide())
        fetchTypes().then(data => product.setTypes(data))




    }




    const addInfo = () =>{
        setInfo([...info, {title:'', description:'', number: Date.now()}])
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
                            {product.selectedType.name || "Выберите тип"}
                            
                        </DropdownToggle>
                        <DropdownMenu>
                            {product.types.map(type =>
                                <DropdownItem 
                                    onClick={()=> product.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </DropdownItem>
                                
                            )}
                        </DropdownMenu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange = {e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название товара"
                    />
                    <Form.Control
                        value={price}
                        onChange = {e => setPrice(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите цену товара"
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        
                        type="file"
                        onChange = {selectFile}
                    />
                    <hr></hr>
                    <Button variant="outline-dark" onClick={addInfo}>
                        Добавить новое свойство
                    </Button>
                    {info.map(i =>
                        <Row className="mt-3">
                            <Col md={4}>
                                <FormControl
                                    value ={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder="Введите название свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <FormControl
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
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
              <Button variant="primary" onClick={addProduct}>
                Добавить
              </Button>
            </Modal.Footer>
          </Modal>

      );
  })

