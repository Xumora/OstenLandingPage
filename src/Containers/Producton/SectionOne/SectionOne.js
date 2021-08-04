import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

const SectionOne = () => {
    return (
        <section>
            <div className="container">
                <h2 className="text-center my-5">Производство</h2>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row className="my-5">
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" className="t-link">Пассажирские лифты</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" className="t-link">Лифт для коттеджей</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" className="t-link">Больничный лифт</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth" className="t-link">Грузовой лифт</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    lorem
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    ipsum
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    lorem
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    ipsum
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </section>
    )
}

export default SectionOne
