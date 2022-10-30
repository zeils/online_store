import React, {useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";

import { observer } from "mobx-react-lite";
import emailjs from 'emailjs-com'
import { TEMPLATE_ID, SERVICE_ID, PUBLIC_KEY} from "./../../utils/consts";




export const orderEror = ({show, onHide}) => {
    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()

    
    

    return (

          <Modal show={show} onHide={onHide} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Сформировать заказ</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={name}
                        onChange = {e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите ваше имя и фамилию"
                    />
                    <Form.Control
                        value={phone}
                        onChange = {e => setPhone(e.target.value)}
                        className="mt-3"
                        placeholder="Введите ваш телефон"
                    />
                    <Form.Control
                        value={email}
                        onChange = {e => setEmail(e.target.value)}
                        className="mt-3"
                        placeholder="Введите ваш email (при необходимости)"
                    />
                
                                    
                </Form>
            </Modal.Body>
          </Modal>

      );
  }

