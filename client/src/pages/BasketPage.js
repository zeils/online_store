import React, { useState, useContext, useEffect } from "react";
import { Context } from "..";
import { Row, Col, Button, Container} from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { CreateOrder } from "../components/modals/CreateOrder";
import ProductItem from "../components/ProductItem";

const Basket = observer(() => {
    const {basket} = useContext(Context)
    const [orderVisible, setOrderVisible] = useState(false)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect (()=> {
        var total = 0
        basket.products.map((product) =>
          total = total + product.price,
          console.log('total ' + total)

        )
        setTotalPrice(total)

    })


  
    const removeProduct = (product) =>{
        basket.removeProduct(product)
        window.location.reload()

    }
    
   
    return (
        <Container>
          
        <Row>
            
        <Col className="d-flex flex-column mt-3">
            <h2 className="d-flex flex-column mt-2 ms-3">{basket.products.length === 0 ? 'Ваша корзина пуста!' : 'Корзина'}</h2>  
                
            {basket.products.map((product) =>
                <ProductItem product={product} key={product.id}> </ProductItem>
 
            )}


                
        </Col>
        <Col className="d-flex flex-column mt-3" md={3}>
        <h2 className="d-flex flex-column mt-3">
            <Container>
                <Row> Общая стоимость корзины:</Row>
                <Row>{totalPrice} руб.</Row>
            </Container>
            <Button variant={"outline-dark"}  onClick={()=> setOrderVisible(true)} className="mt-3">Сформировать заказ</Button>

        </h2>
           
        </Col>
        </Row>

        <CreateOrder show={orderVisible} onHide={() => setOrderVisible(false)}/>

        </Container>
    );
});

export default Basket;

//<Button variant={"outline-dark"}  onClick={()=> setOrderVisible(true)} disabled={!basket.products.length}>Сформировать заказ</Button>