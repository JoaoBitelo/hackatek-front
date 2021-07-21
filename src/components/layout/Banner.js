import React from "react";
import { Jumbotron, Container, Image, Row, Col } from "react-bootstrap";
import image from "../../content/images/mulher_de_mascara_falando.png";

function Banner() {
  return ( 
    <Container className="event-page-container">
      <Row>
        <Col>
          <Jumbotron fluid>
            <div className="pages-path">
              <p> Home {">"} Eventos e Ações Solidárias </p>
            </div>
            <div className="big-description">
              <p> O Voluntariado na pandemia </p>
            </div>
            <div className="app-name">
              <p> I care a lot. </p>
            </div>
          </Jumbotron>
        </Col>
        <Col>
          <div className="container-2">
            <Image src={ image } fluid/>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Banner;
