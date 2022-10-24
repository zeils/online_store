import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink} from "react-router-dom";
import { Context } from "../index"
import { ADMIN_ROUTE, LOGIN_ROUT, SHOP_ROUTE } from "../utils/consts";

export const NavBar = observer (() => {
    const {user} = useContext(Context)

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
        <Container>
            <NavLink style={{color: 'white'}} to= {SHOP_ROUTE}  className="ms-*"> Название магазина </NavLink>
            {user.isAuth ? 

                <Nav className="ml-auto" >
                    <NavLink to={ADMIN_ROUTE}>
                        <Button variant="outline-light">Админ панель</Button>
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