import React from "react";
import { Card } from "react-bootstrap";
import image from "../../content/images/Rectangle 5.png";

function CardEvent() {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>Dia Feliz</Card.Title>
                <div className="heart-icon">
                    <i class="far fa-heart"></i>
                </div>
                <div className="share-icon">
                    <i class="fas fa-share-alt"></i>
                </div>
            </Card.Body>
        </Card>
    );
}

export default CardEvent;
