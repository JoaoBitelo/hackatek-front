import "./App.css";
import { Container, Row, Col } from "react-bootstrap";

import Header from "./components/layout/Header";
import CardEvent from "./components/layout/Card";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Container>
        <Row>
          {/* utilizar função de mapping para renderizar cada Card */}
          <Col>
            <CardEvent></CardEvent>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
