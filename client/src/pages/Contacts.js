import React from "react";
import { Button, Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { STORE_LOCATION } from "../utils/consts";


const Contacts = () => {
    return (
        
        <Container className="d-flex flex-column mt-3">   
        <h3>Контакты</h3>
        <Table striped bordered hover >
            
            <tbody>
                <tr>
                    <th>Телефон (Whats App)</th>
                    <td>+7 914 790-43-00</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <th>Эл. почта</th>
                    <td>elvira-m@mail.ru</td>
                </tr>
            </tbody>
        </Table>
        <h3>Наше местонахождение</h3>
        <Table striped bordered hover className="mt-1">
            
            <tbody>
                <tr>
                    <th>Адрес</th>
                    <td>Г. Владивосток, ул.Светланская 106, ТЦ Авангард, 1 Эт. Магазин BaGaЖ</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <th>График работы</th>
                    <td>Ежедневно с 10:00 до 20:00</td>
                </tr>
            </tbody>
        </Table>
        <Button variant="secondary">
            <a href={STORE_LOCATION} className="nav-link d-inline" target="_blank" rel="noopener noreferrer">
                Посмотреть на карте
            </a>
        </Button>

        </Container>
  
        
        
    );
};

export default Contacts;