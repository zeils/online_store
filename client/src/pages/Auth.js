import { Button, Container, Form, FormControl, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card"
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUT, REGISTRATION_ROUT } from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUT

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
                    />
                    <FormControl
                        className="mt-3"
                        placeholder="Введите ваш пароль"
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