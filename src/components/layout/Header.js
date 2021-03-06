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

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container
                style={{
                    justifyContent: "space-around",
                    alignItems: "baseline",
                }}
            >
                <Navbar.Brand
                    href="/"
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        paddingLeft: 14,
                    }}
                >
                    <Image roundedCircle src={image} />
                </Navbar.Brand>

                <Nav
                    className="me-auto"
                    style={{ flex: 2, justifyContent: "center" }}
                >
                    <InputGroup>
                        <FormControl
                            placeholder="Pesquisar eventos e ações solidárias"
                            aria-describedby="basic-addon2"
                            style={{
                                borderWidth: 2,
                                borderColor: "#A992C5",
                            }}
                        />
                    </InputGroup>
                </Nav>

                <Nav
                    style={{
                        flex: 2,
                        justifyContent: "center",
                        alignItems: "baseline",
                    }}
                >
                    <i
                        class="fas fa-map-marker-alt fa-2x"
                        style={{
                            color: "#A992C5",
                            paddingRight: 15,
                            fontSize: "1.3rem",
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

                <Nav
                    className="me-auto"
                    style={{ flex: 1, justifyContent: "center" }}
                >
                    <ButtonGeneric
                        size="lg"
                        variant="primary"
                        text={"CADASTRE-SE"}
                    />
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;
