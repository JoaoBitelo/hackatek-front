import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardEvent from "./Card";

const limitToReturn = 4;

const fetchData = async (hasIcons) => {
    var url = "http://localhost:3000/";
    if (hasIcons) {
        url = url + "events";
    } else {
        url = url + "filters/1";
    }
    var res = await fetch(url + "?_limit=" + limitToReturn);

    res = await res.json();
    if (!hasIcons) {
        res = res.content;
        res = res.slice([0], [limitToReturn]);
    }
    return res;
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
