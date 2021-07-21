import React from "react";
import {
    Jumbotron,
    Container,
    Image,
    Row,
    Col,
    Breadcrumb,
} from "react-bootstrap";
import image from "../../content/images/mulher_de_mascara_falando.png";
import title from "../../content/images/O Voluntariado na pandemia.svg";
import subtitle from "../../content/images/Group.svg";

function Banner() {
    return (
        <Jumbotron fluid className="event-page-container">
            <Container>
                <Row>
                    <Col>
                        <Breadcrumb className="mt-3">
                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="#">
                                Eventos e Ações Solidárias
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="title-container">
                            <Image
                                src={title}
                                className="banner-title mt-3"
                            ></Image>
                            <Image
                                src={subtitle}
                                className="banner-subtitle"
                            ></Image>
                        </div>
                    </Col>
                    <Col>
                        <div className="container-2">
                            <Image src={image} fluid />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Banner;
