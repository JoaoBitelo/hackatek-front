import React from "react";
import { Card } from "react-bootstrap";
import image from "../../content/images/Rectangle 5.png";

function CardEvent(props) {
    const hasIcons = props.hasIcons;
    const item = props.item;
    return (
        <Card style={{ width: "14rem" }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    {hasIcons && (
                        <div className="icons">
                            <div className="icon">
                                <i class="far fa-heart fa-2x"></i>
                            </div>
                            <div className="icon">
                                <i class="fas fa-share-alt fa-2x"></i>
                            </div>
                        </div>
                    )}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardEvent;
