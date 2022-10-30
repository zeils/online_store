import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";


const Company = () => {
    return (
        <Container className="d-flex flex-column mt-3">
            <Row><h2>О компании</h2> </Row>
            <Row className="d-flex mt-3">Магазин BaGaЖ уже более 10 лет радует своих покупателей сочетанием отличного качества и очень разумной цены.</Row>
            <Row className="d-flex mt-3">Внимательно изучая тенденцию моды, мы всегда идем на один шаг впереди, и предлагаем быть законодателем, а не последователем в движении к совершенству стиля и красоты. Смелые композиции цветов и нестандартные решения позволят Вам  подчеркнуть индивидуальность. Все изделия обладают не только своим неповторимым лицом и стилем, но и высоким качеством. Модельный ряд состоит из новых коллекций и классических моделей. Ассортимент постоянно обновляется, учитывая предпочтения покупателей и стиль диктуемый модой.</Row>
            <Row className="d-flex mt-3">
                <h5>«Ваgaж» — всё для работы, спорта и путешествий</h5>
                <ul>
                    <li>Чемоданы и дорожные сумки на колёсах.</li>
                    <li>Рюкзаки для взрослых и детей.</li>
                    <li>Сумки для спорта и фитнеса.</li>
                    <li>Портфели и различные аксессуары из натуральной кожи.</li>
                    <li>Модные и стильные сумочки на любой вкус.</li>
                </ul>
                
            </Row>

            <Row className="d-flex mt-3">
                <Row className="d-flex">
                    Самые выгодные цены и гарантия от производителя.
                </Row>
                <Row className="d-flex">
                    Вся продукция сертифицирована.
                </Row>
                        
                        
                    
            </Row>
            <Row className="d-flex mt-3">
                Магазин «Bagaж» — ваш надёжный попутчик в любую дорогу.
                г. Владивосток, ул. Светланская, 106, ТЦ «Авангард», 1-й этаж.
                ИП Шелковникова Э.Ю.
            </Row>
            <Row className="d-flex mt-3">
                ИНН 253802637990

            </Row>
        </Container>

        
    );
};

export default Company;