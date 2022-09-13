import React from "react"
import { Card, Col} from "react-bootstrap"
import Image from "react-bootstrap/Image"
import { PRODUCT_ROUTE } from "../utils/consts"
import { NavLink, useNavigate } from "react-router-dom"

const ProductItem = ({product}) => {
    //PRODUCT_ROUTE + '/' + product.id

    const navigate = useNavigate()

    const ProductClick = () => (
        console.log('Клик'),
        navigate( PRODUCT_ROUTE + '/' + product.id)
    )

    
    return (
        <Col md={3} className={"mt-3"}>
            <NavLink 
                to={PRODUCT_ROUTE + '/' + product.id} 
                
                style={{ 
                    color: "black",
                    textDecoration: 'none' }} >

                <Card style={{width:150, cursor: 'pointer'}} border={"light"} >
                    <Image width={150} height={150} src={product.img}/>
                    <div className="mt-1 d-flex justify-content-between align-items-center" variant="outline-light">
                        {product.name}
                    </div>


                </Card>
            </NavLink>
            
        
        </Col>
        


    )
}

export default ProductItem