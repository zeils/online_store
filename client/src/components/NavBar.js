import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Context } from "../index"
import { SHOP_ROUTE } from "../utils/consts";

export const NavBar = observer (() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
            <NavLink style={{color: 'white'}} to= {SHOP_ROUTE}  className="ms-*"> Название магазина </NavLink>
            {user.isAuth ? 

                <Nav className="ml-auto" >
                    <Button variant="outline-light" >Админ панель</Button>
                    <Button variant="outline-light" >Войти</Button>

                </Nav>
            :
                <Nav className="ml-auto">
                    <Button variant="outline-light" onClick={()=> user.setIsAuth(true)}>Авторизация</Button>

                </Nav>
            

            }
          
        </Container>
      </Navbar>
    )
})