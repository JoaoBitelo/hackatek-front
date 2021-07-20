import React from "react";
import { Card } from "react-bootstrap";

function CardEvent() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Dia Feliz</Card.Title>
        <Card.Text>Descrição </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardEvent;
