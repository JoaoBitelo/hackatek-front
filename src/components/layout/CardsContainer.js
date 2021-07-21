import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardEvent from "./Card";

const limitToReturn = 4;

const fetchData = async (hasIcons) => {
    const res = await fetch("http://localhost:3000/event?_limit=" + limitToReturn);
    return res.json();
};

function CardsContainer(props) {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetchData(hasIcons).then((res) => {
            setCards(res);
        });
    }, []);

    const hasIcons = props.hasIcons;
    return (
        <Container className="events-container">
            <h4>{props.title}</h4>
            <Row md={4} className="g-4">
                {cards.map((item, idx) => (
                    <Col>
                        <CardEvent item={item} hasIcons={hasIcons}></CardEvent>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default CardsContainer;
