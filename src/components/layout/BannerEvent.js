import React from "react";
import {
    Jumbotron,
    Container,
    Image,
    Row,
    Col,
    Breadcrumb,
} from "react-bootstrap";

function BannerEvent() {
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
                        <div className="image-container">
                            <Image
                                src="https://www.jornaldocomercio.com/_midias/jpg/2020/04/15/ma150420_mascara39-9037259.jpg"
                                thumbnail={true}
                                width="300px"
                                height="300px"
                                style={{
                                    "box-shadow": "-20px -20px #A992C5",
                                }}
                            ></Image>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default BannerEvent;
