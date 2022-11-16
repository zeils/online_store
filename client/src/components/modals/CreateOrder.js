import React, {useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import emailjs from 'emailjs-com'
import { TEMPLATE_ID, SERVICE_ID, PUBLIC_KEY} from "./../../utils/consts";
import Alert from 'react-bootstrap/Alert';




export const CreateOrder = observer(({show, onHide}) => {
    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [ShowAlert, setShowAlert] = useState(false)
    const [resultMessage, setResultMessage] = useState('Заказ успешно отправлен, ожидайте, с вами свяжется наш сотрудник')
    const [result, setResult] = useState()

    

    



    const sendMail = async() =>{
        const cart = JSON.parse(localStorage.getItem("basket"))
        var order = [] 


        cart.forEach(function(product) {

            const item = product.name + "  " + product.price + "руб."
            order.push(item)
            
          });

        const mail = {
            name: name,
            phone: phone,
            email: email,
            order: JSON.stringify(order)
        }
        

        emailjs.send(SERVICE_ID, TEMPLATE_ID, mail, PUBLIC_KEY)
        .then((result) => {
            setShowAlert(true)
            console.log(result.text);
            setResultMessage('Заказ успешно отправлен, ожидайте, с вами свяжется наш сотрудник')
            setResult('success')
        }, (error) => {
            setShowAlert(true)
            setResultMessage('Ошибка!')
            setResult('danger')
        });
            

    }

 

    

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

                <Alert show={ShowAlert} variant={result} className="mt-3">
                    {resultMessage}
                </Alert>
                
            </Modal.Body>
            <Modal.Footer>
            
              <Button variant="secondary" onClick={onHide}>
                Закрыть
              </Button>
              <Button variant="primary" onClick={sendMail} disabled={ShowAlert}>
                Отправить
              </Button>
              
            </Modal.Footer>
          </Modal>

      );
  })

