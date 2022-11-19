import React from "react";
import { Container, Card, Image} from "react-bootstrap";
import { Component } from "react";




class ErrorBoundary extends Component {
    state = {
        error: null,
    };
    static getDerivedStateFromError(error) {
        return { error };
    }
    render() {
        const { error } = this.state;

        if (error) {
            return (
                <Container className="d-flex flex-column mt-4 ">
                    <Card style={{ width: '50rem', backgroundColor: '#E1E2E1'}} className="">
                        <Card.Body>
                        <Card.Title>Ошибка!</Card.Title>
                        <Card.Text>
                            Похоже что-то пошло не так
                        </Card.Text>
                
                        </Card.Body>
                        <Image src={require('./error.jpg')}/>
                    </Card>

                </Container>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;