import React from "react";
import {
    Container,
    Navbar,
    Image,
    Row,
    InputGroup,
    FormControl,
    Col,
} from "react-bootstrap";
import image from "../../content/images/circleLogo.png";
import ButtonGeneric from "./Button";

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Row>
                    <Col>
                        <Image roundedCircle src={image} />
                    </Col>
                    <Col>
                        <InputGroup>
                            <FormControl
                                placeholder="Pesquisar eventos e ações solidárias"
                                aria-describedby="basic-addon2"
                            />
                        </InputGroup>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <i
                                    class="fas fa-map-marker-alt"
                                    style={{
                                        color: "#A992C5",
                                        fontSize: "1.5rem",
                                    }}
                                ></i>
                            </Col>
                            <Col>
                                <p
                                    style={{
                                        color: "black",
                                        fontSize: "1.5rem",
                                        textDecorationLine: "underline",
                                    }}
                                >
                                    Porto Alegre
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <ButtonGeneric text={"Cadastre-se"} />
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}

export default Header;
