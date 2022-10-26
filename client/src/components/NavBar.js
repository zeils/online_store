import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink} from "react-router-dom";
import { Context } from "../index"
import { ADMIN_ROUTE, LOGIN_ROUT, SHOP_ROUTE } from "../utils/consts";
import { useState } from "react";
import { Row } from "react-bootstrap";




export const NavBar = observer (() => {
    const {user} = useContext(Context)
    const {product} = useContext(Context)



    

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
        <Container>
            <NavLink style={{color: 'white'}} to= {SHOP_ROUTE}  className="ms-*"  onClick={() => product.setSelectedType({})}> BaGaЖ </NavLink>
            <NavLink style={{color: 'white'}} to= {SHOP_ROUTE}  className="ms-*"  onClick={() => product.setSelectedType({})}>
                <Row> Г.  Владивосток, ул.Светланская 106,  ТЦ Авангард, 1 Эт. Магазин  BaGaЖ</Row>
                <Row> Связь: +7(914)790-43-00 и elvira-m@mail.ru</Row>
            </NavLink>
            {user.isAuth ? 

                <Nav className="ml-auto" >
                    <NavLink to={ADMIN_ROUTE}>

                        { user.role === 'ADMIN'? <Button variant="outline-light" show={false}>Админ панель</Button> : null }
                        
                    </NavLink>
                    
                    <NavLink to={SHOP_ROUTE}>
                        <Button variant="outline-light" onClick={logOut}>Выйти</Button>
                    </NavLink>
                    
                    

                </Nav>
            :
                <Nav className="ml-auto">
                    <NavLink to={LOGIN_ROUT}>
                        <Button variant="outline-light">Авторизация</Button>
                    </NavLink>
                    

                </Nav>
            

            }
          
        </Container>
      </Navbar>
    )
})