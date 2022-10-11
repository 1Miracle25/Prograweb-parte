import { Card, Container, Row, Col } from "react-bootstrap"
import Accordion from 'react-bootstrap/Accordion';
import headset from "../../assets/headset.png"
import mousepad from "../../assets/mousepad.png"
import mousepadXL from "../../assets/mousepadXL.png"
import "./bestbuild.css"
const BestBuilds = () => {
    const containerTitulo = {
        marginLeft: "-255px",
        marginTop: "30px"
    }
    const containerOpciones = {
        margin: "none",
        marginLeft: "0px",
        paddingLeft: "none",
        width:"100%"
    }
    const builts = {
        marginLeft: "-155px",
        paddingLeft: "0px",
        width: "80%"
    }
    return (
        <Container>
            <Row style={containerTitulo}>
                <div class="contenedor_titulo">
                    <h1>Ranking best sellers builds</h1>
                </div>
            </Row>
            <Row style={containerOpciones}> 
                <Accordion defaultActiveKey="0" style={builts}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
        </Container>
    )
}

export default BestBuilds