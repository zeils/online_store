import React, { useEffect, useState } from "react";
import { Container, Col, Image, Card, Row, Button } from "react-bootstrap";
import {useParams} from 'react-router-dom'
import { fetchOneProduct } from "../http/productAPI";
import { useContext } from "react";
import { Context } from "..";

const ProductPage = () => {
    const [product, setProduct] = useState({info:[]})
    const [picture, setPicture] = useState([])
    const {id} = useParams()
    const {basket} = useContext(Context)

    useEffect(()=>{
        fetchOneProduct(id).then(
            data => {

                setProduct(data.product); 
                setPicture(data.picsNames)
            }          
            )


    }, [])
    
    const {REACT_APP_API_URL} = process.env
    return (
        <Container className="mt-3">
            <Row className="d-flex flex-column alignt-items-center">
                <h2>{product.name}</h2>
            </Row> 
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={REACT_APP_API_URL + picture[0]}></Image>

                </Col>

                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style = {{width: 300, height:300, fontSize: 32, border: '5px solid lightgray'}}>
                        <h3>{product.price} руб.</h3>
                        <Button variant={"outline-dark"} onClick={() => basket.addProduct(product)}>Добавить в корзину</Button>
                    </Card>
                
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {product.info.map((info, index) =>
                    <Row key={info.id} style={{background: 'lightgray', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
            
        </Container>
    );
};

export default ProductPage;