import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { Button, Container, Form, FormControl, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card"
import { Navigate, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Context } from "..";
import { login, registration } from "../http/userApi";
import { LOGIN_ROUT, REGISTRATION_ROUT } from "../utils/consts";
import { SHOP_ROUTE } from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const {user} = useContext(Context)

    const isLogin = location.pathname === LOGIN_ROUT


    const [email , setEmail] = useState()
    const [password , setPassword] = useState()

    const click = async () => {
       

            if (isLogin) {
                const response = await login(email, password)
    
            } else {
                const response = await registration(email, password)
            }
            user.setUser(user)
            user.setAuth(true)
            Navigate(SHOP_ROUTE)
            


      
        
        


    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form>
                    <FormControl
                        className="mt-3"
                        placeholder="Введите ваш логин"
                        value ={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <FormControl
                        className="mt-3"
                        placeholder="Введите ваш пароль"
                        value ={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className="d-flex justify-content-between mt-3 ">
                        {isLogin ?
                            <div>
                                <NavLink to={REGISTRATION_ROUT}>Регистрация</NavLink>
                            </div>
                            :
                            <div>
                                <NavLink to={LOGIN_ROUT}>Войдите</NavLink>
                            </div>
                        }
                        <Button 
                            className="mt-3"
                            variant={"outline-success"}
                            onClick={click}
                            
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                            
                        </Button>                    
                    </Row>



                </Form>
            </Card>
        
        </Container>
    );
};

export default Auth;