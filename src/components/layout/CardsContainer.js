import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardEvent from "./Card";

function CardsContainer(props) {
    const hasIcons = props.hasIcons;
    return (
        <Container className="events-container">
            <h4>{props.title}</h4>
            <Row md={4} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <CardEvent hasIcons={hasIcons}></CardEvent>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default CardsContainer;
