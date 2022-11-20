import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { Button, Container, Form, FormControl, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card"
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Context } from "..";
import { login, registration } from "../http/userApi";
import { LOGIN_ROUT, REGISTRATION_ROUT } from "../utils/consts";
import { SHOP_ROUTE } from "../utils/consts";
import {ErrorModal } from "../error/ErrorModal";
import ErrorBoundary from "../error/ErrorBoundary";


const Auth = observer(() => {
    const location = useLocation()
    const {user} = useContext(Context)

    const isLogin = location.pathname === LOGIN_ROUT


    const [email , setEmail] = useState()
    const [password , setPassword] = useState()
    const [errorVisible, setErrorVisible] = useState(false)
    
    const navigate = useNavigate()

    const click = async () => {
        try {
            let data;

            if (!email || !password){
                setErrorVisible(true)
            }else {
                if (isLogin) {
                    data = await login(email, password, user)
        
                } else {
                    data = await registration(email, password, 'USER')
                }
                user.setUser(user)
                user.setIsAuth(true)        
                navigate(SHOP_ROUTE)
            }
    
        } catch (e) {
            alert(e.response.data.message)


        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 100}}
        >
            <Card style={{width: 600, backgroundColor:'#B5B5B5' }} className="p-5">
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
                    <Row className="d-flex justify-content-between mt-3 "  >
                        {isLogin ?
                            <div>
                                <NavLink to={REGISTRATION_ROUT} style={{color: 'black', className:"d-flex flex-column", textDecoration: 'none' }}>Регистрация</NavLink>
                            </div>
                            :
                            <div>
                                <NavLink to={LOGIN_ROUT} style={{color: 'black', className:"d-flex flex-column", textDecoration: 'none' }}>Войдите</NavLink>
                            </div>
                        }
                        <Button 
                            className="mt-3"
                            
                            onClick={click}
                            variant="secondary"
                            
                            
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                            
                        </Button>                    
                    </Row>
                    <ErrorModal show={errorVisible} onHide={() => setErrorVisible(false)} message={'Не введен логин или пароль'}/>
                    


                </Form>
            </Card>
        
        </Container>
    );
});

export default Auth;


