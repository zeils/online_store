import React, { useEffect, useState, useContext } from "react";
import { Container, Col, Image, Card, Row, Button, Carousel} from "react-bootstrap";
import {useParams} from 'react-router-dom'
import { fetchOneProduct } from "../http/productAPI";
import { Context } from "..";

const ProductPage = () => {
    const [product, setProduct] = useState({info:[]})
    //const [product, setProduct] = useState()
    const [pictures, setPictures] = useState([])
    const {id} = useParams()
    const {basket} = useContext(Context)

    useEffect(()=>{
        fetchOneProduct(id).then(
            data => {

                setProduct(data.product); 
                setPictures(data.picsNames)
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
                <Col  md={5}>
                    <Card 
                        className="d-flex flex-column align-items-center justify-content-center"
                        style = {{width: 470, height:470, fontSize: 32, border: '5px solid lightgray'}}>
                        <Carousel interval={null} variant='dark' style = {{width: 470, height:470, padding:20}} className="d-flex flex-column align-items-center justify-content-center">
                            {pictures.map(i =>
                            <Carousel.Item >
                                <div className="d-flex justify-content-center">
                                    <Image  height={400} src={REACT_APP_API_URL + i} className="d-flex justify-content-center"></Image>

                                </div>
                                
                            </Carousel.Item>
                            )}
                 
                        </Carousel>

                    </Card>
                    
                    

                </Col>

                <Col  md={1}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style = {{width: 300, height:300, fontSize: 32, border: '5px solid lightgray'}}>
                        <h3>{product.price} руб.</h3>
                        <Button variant={"outline-dark"} onClick={() => basket.addProduct(product)}>Добавить в корзину</Button>
                    </Card>
                
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                
                    <h2>О товаре</h2>
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