import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardEvent from "./Card";

function CardsContainer() {
    return (
        <Container>
            <h3>Ações perto de você esse mês</h3>
            <Row md={4} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <CardEvent></CardEvent>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default CardsContainer;
