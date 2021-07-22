import React from "react";
import {
    Jumbotron,
    Container,
    Image,
    Row,
    Col,
    Breadcrumb,
    Card,
} from "react-bootstrap";
import ButtonGeneric from "./Button";

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
                    <Col>
                        <div className="description-container">
                            <Card
                                style={{
                                    width: "40rem",
                                    backgroundColor: "#F4A4B3",
                                    opacity: 0.9,
                                }}
                            >
                                <Card.Body>
                                    <Card.Text>
                                        A Secretaria Estadual da Saúde do Rio
                                        Grande do Sul (SES/RS) abriu um canal
                                        para cadastro de voluntários em
                                        atividades de enfretamento à pandemia do
                                        coronavírus no Estado. São oferecidas
                                        possibilidades de voluntariado a
                                        profissionais da sáude e de outras
                                        categorias profissionais.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <div className="button-container">
                                <ButtonGeneric
                                    size="lg"
                                    variant="primary"
                                    text={"QUERO ME INSCREVER!"}
                                    className="button"
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default BannerEvent;
