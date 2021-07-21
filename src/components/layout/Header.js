import React from "react";
import {
    Container,
    Navbar,
    Image,
    InputGroup,
    FormControl,
    Nav,
} from "react-bootstrap";
import image from "../../content/images/circleLogo.png";
import ButtonGeneric from "./Button";
import { Button } from "react-bootstrap";

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <Image roundedCircle src={image} />
                </Navbar.Brand>

                <Nav className="me-auto">
                    <InputGroup>
                        <FormControl
                            placeholder="Pesquisar eventos e ações solidárias"
                            aria-describedby="basic-addon2"
                            style={{
                                borderWidth: 1,
                                borderColor: "#A992C5",
                            }}
                        />
                    </InputGroup>
                </Nav>

                <Nav className="me-auto">
                    <i
                        class="fas fa-map-marker-alt fa-2x"
                        style={{
                            color: "#A992C5",

                            paddingRight: 10,
                        }}
                    ></i>

                    <p
                        style={{
                            color: "#3A3A3A",
                            fontSize: "1rem",
                            textDecorationLine: "underline",
                            fontWeight: "bold",
                        }}
                    >
                        Porto Alegre
                    </p>
                </Nav>

                <Nav className="me-auto">
                    <Button size="lg" variant="primary">
                        Cadastre-se
                    </Button>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;
