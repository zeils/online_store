import React from "react";
import { Container, Col, Image, Card, Row, Button } from "react-bootstrap";

const ProductPage = () => {
    const product = {id: 1, name: "Первый тестовый продукт", price: 1000, rating: 5, img: 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'}
    const description = {id:1, title: 'товар такой то', description: 'описание'}
    return (
        <Container className="mt-3">
            <Row className="d-flex flex-column alignt-items-center">
                <h2>{product.name}</h2>
            </Row> 
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={product.img}></Image>

                </Col>

                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style = {{width: 300, height:300, fontSize: 32, border: '5px solid lightgray'}}>
                        <h3>{product.price} руб.</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3" style={{background: 'lightgray'}}>
                {description.title}: {description.description}
            </Row>
            
        </Container>
    );
};

export default ProductPage;