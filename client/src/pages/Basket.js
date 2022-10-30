import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "..";
import ProductItem from "./../components/ProductItem"
import { Card, Row, Col, Button, ListGroup, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image"
import { observer } from "mobx-react-lite";
import { CreateOrder } from "../components/modals/CreateOrder";




const Basket = observer(() => {
    const {basket} = useContext(Context)
    const {REACT_APP_API_URL} = process.env
    const [orderVisible, setOrderVisible] = useState(false)


  
    const removeProduct = (product) =>{
        basket.removeProduct(product)
        window.location.reload()

    } 






    return (
        <Container>
          <h2 className="d-flex flex-column mt-3">Корзина</h2>
        <Row>
        <Col className="d-flex flex-column mt-3" md={9}>
            <Row className="d-flex">
            

            {basket.products.map((product) =>
                
        
                <Card style={{ width: '20%' }}>
                <Card.Img className="mt-3" variant="top" src={REACT_APP_API_URL + product.img} style={{ width: '100%' }}/>
                <Card.Body variant="bottom">
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    {product.price} руб.
                  </Card.Text>
                  <Button variant="primary" onClick={()=> removeProduct(product)}>Удалить</Button>
                </Card.Body>
              </Card>
              

            )}

            </Row>



                
        </Col>
        <Col className="d-flex flex-column mt-3" md={3}>
            <Row>
              <Button variant={"outline-dark"} className="mt-2" onClick={()=> setOrderVisible(true)}>Сформировать заказ</Button>
            </Row>
            <Row>
              С вами свяжется наш сотрудник
            </Row>
            
                
        </Col>
        </Row>

        <CreateOrder show={orderVisible} onHide={() => setOrderVisible(false)}/>

        </Container>
    );
});

export default Basket;



    