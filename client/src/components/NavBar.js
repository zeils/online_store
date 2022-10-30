import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink} from "react-router-dom";
import { Context } from "../index"
import { ADMIN_ROUTE, BASKET_ROUT, COMPANY_ROUTE, CONTATCS_ROUTE, LOGIN_ROUT, SHOP_ROUTE } from "../utils/consts";
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
            
            <NavLink  style={{color: 'white', className:"d-flex flex-column mt-3", textDecoration: 'none' }} to= {SHOP_ROUTE}  className="ms-*"  onClick={() => product.setSelectedType({})} > 
                <Row ><h1><u>BaGaЖ</u> </h1></Row>
                <Row ><h10>Магазин чемоданов, сумок, кожгалантереи</h10></Row>
            
            </NavLink>

            
            {user.isAuth ? 

                <Nav className="ml-auto" >
                    <NavLink to={COMPANY_ROUTE}>
                        <Button variant="outline-light">О компании</Button>
                    </NavLink>
                    <NavLink to={SHOP_ROUTE}>
                        <Button variant="outline-light">Каталог</Button>
                    </NavLink>
                    <NavLink to={CONTATCS_ROUTE}>
                        <Button variant="outline-light">Контакты</Button>
                    </NavLink>
                    <NavLink to={BASKET_ROUT}>
                        <Button variant="outline-light">Корзина</Button>
                    </NavLink>

                    

                    <NavLink to={ADMIN_ROUTE}>

                        { user.role === 'ADMIN'? <Button variant="outline-light" show={false}>Админ панель</Button> : null }
                        
                    </NavLink>
                    
                    <NavLink to={SHOP_ROUTE}>
                        <Button variant="outline-light" onClick={logOut}>Выйти</Button>
                    </NavLink>
                    
                    

                </Nav>
            :

                <Nav className="ml-auto">
                    <NavLink to={COMPANY_ROUTE}>
                        <Button variant="outline-light">О компании</Button>
                    </NavLink>
                    <NavLink to={SHOP_ROUTE}>
                        <Button variant="outline-light">Каталог</Button>
                    </NavLink>
                    <NavLink to={CONTATCS_ROUTE}>
                        <Button variant="outline-light">Контакты</Button>
                    </NavLink>
                    <NavLink to={BASKET_ROUT}>
                        <Button variant="outline-light">Корзина</Button>
                    </NavLink>
                    <NavLink to={LOGIN_ROUT}>
                        <Button variant="outline-light">Авторизация</Button>
                    </NavLink>
                    

                </Nav>
            

            }
          
        </Container>
      </Navbar>
    )
})