import React from "react"
import { Card, Col} from "react-bootstrap"
import Image from "react-bootstrap/Image"
import { PRODUCT_ROUTE } from "../utils/consts"
import { NavLink} from "react-router-dom"

const ProductItem = ({product}) => {
    //PRODUCT_ROUTE + '/' + product.id

    const {REACT_APP_API_URL} = process.env





    
    return (
        <Col md={3} className={"mt-3"}>
            <NavLink 
                to={PRODUCT_ROUTE + '/' + product.id} 
                
                style={{ 
                    color: "black",
                    textDecoration: 'none' }} >

                <Card style={{width:150, cursor: 'pointer'}} border={"light"} >
                    <Image width={150} height={150} src={REACT_APP_API_URL + product.img}/>
                    <div className="mt-1 d-flex justify-content-between align-items-center" variant="outline-light">
                        {product.name}
                    </div>


                </Card>
            </NavLink>
            
        
        </Col>
        


    )
}

export default ProductItem