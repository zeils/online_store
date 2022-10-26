import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import ProductItem from "./ProductItem";
import { Row } from "react-bootstrap";

export const ProductList = observer(() => {
    const {product} = useContext(Context)


    return (
        <Row className="d-flex">
            {product.products.map((product) => 

                <ProductItem key={product.id} product={product} />
 
                  
            )}
        </Row>


    )
})

