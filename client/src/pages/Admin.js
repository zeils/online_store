import React from "react";
import { Button, Container } from "react-bootstrap";
import {CreateType} from "../components/modals/CreateType"
import {CreateProduct} from "../components/modals/CreateProduct"
import { useState } from "react";

const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false)
    const [ProductVisible, setProductVisible] = useState(false)
    

    return (
        <Container className="d-flex flex-column">
            <Button variant={"outline-dark"} className="mt-2" onClick={()=> setTypeVisible(true)}>Добавить тип</Button>
            <Button variant={"outline-dark"} className="mt-2"onClick={()=> setProductVisible(true)}>Добавить товар</Button>

            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateProduct show={ProductVisible} onHide={() => setProductVisible(false)}/>
            
        </Container>
        
    )
}

export default Admin;