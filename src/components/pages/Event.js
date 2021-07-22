import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardsContainer from "../layout/CardsContainer";
import ButtonGeneric from "../layout/Button";
import BannerEvent from "../layout/BannerEvent";

function Event(props) {
    return (
        <React.Fragment>
            <BannerEvent></BannerEvent>
            <Container>
                <Row>
                    <Col>
                        <ButtonGeneric
                            size="lg"
                            variant="primary"
                            text={"QUERO ME INSCREVER!"}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="text-container"></div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            <CardsContainer
                hasIcons={props.hasIcons}
                title={props.title}
            ></CardsContainer>
        </React.Fragment>
    );
}

export default Event;
