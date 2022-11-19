
import React, { useContext, useEffect} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Context } from "..";
import {ProductList} from "../components/ProductList"
import { TypeBar } from "../components/TypeBar";
import { fetchProducts, fetchTypes} from "../http/productAPI";
import { observer } from "mobx-react-lite";
import ErrorBoundary from "../error/ErrorBoundary";





const Shop = observer(() => {
    const {product} = useContext(Context)



    useEffect (()=> {
        fetchTypes().then(data => product.setTypes(data)) //

        fetchProducts(product.selectedType, 1, product.page, 3).then(data => {

            
            product.setProducts(data)
            product.setTotalCount(data.count)
        
        })




    }, [product.selectedType, product.page])



    return (

        <Container>
            <ErrorBoundary>
            

            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar />
                    

                </Col>
                <Col md={9}>
                    <ProductList />
                    
                </Col>
            </Row>
            </ErrorBoundary>
        </Container>
        
    )
})

export default Shop;