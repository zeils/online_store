import React from "react";
import { Button, Container } from "react-bootstrap";
import {CreateType} from "../components/modals/CreateType"
import {CreateProduct} from "../components/modals/CreateProduct"
import { useState } from "react";
import { useContext } from "react";
import { Context } from "..";
import { Navigate } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import { RemoveType } from "../components/modals/RemoveType";
import { RemoveProduct } from "../components/modals/RemoveProduct";



const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false)
    const [ProductVisible, setProductVisible] = useState(false)
    const [rmTypeVisible, setRmTypeVisible] = useState(false)
    const [rmProductVisible, setRmProductVisible] = useState(false)
    const {user} = useContext(Context)

    if (!user.isAuth)
    {
        return (
            <Navigate to={SHOP_ROUTE}></Navigate>
        )
    }
    console.log(user.role)
    if (user.role === 'USER')
    {

        return (
            <Navigate to={SHOP_ROUTE}></Navigate>

        )

    }




    

    return (
        <Container className="d-flex flex-column">
            <Button variant={"outline-dark"} className="mt-2" onClick={()=> setTypeVisible(true)}>Добавить тип</Button>
            <Button variant={"outline-dark"} className="mt-2"onClick={()=> setProductVisible(true)}>Добавить товар</Button>
            <Button variant={"outline-dark"} className="mt-2"onClick={()=> setRmTypeVisible(true)}>Удалить тип</Button>
            <Button variant={"outline-dark"} className="mt-2"onClick={()=> setRmProductVisible(true)}>Удалить товар</Button>

            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateProduct show={ProductVisible} onHide={() => setProductVisible(false)}/>
            <RemoveType show={rmTypeVisible} onHide={() => setRmTypeVisible(false)}/>
            <RemoveProduct show={rmProductVisible} onHide={() => setRmProductVisible(false)}/>
            
        </Container>
        
    )
}

export default Admin;