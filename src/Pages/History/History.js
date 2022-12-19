import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class History extends Component {

    render() {
        return (
            <Container>
                <br></br>
                <h4>Histórico de cálculos</h4>
                <br></br>
                <Row>
                    <Col>Nome do Empreendimento</Col>
                    <Col>Sementes</Col>
                    <Col>Fertilizantes</Col>
                    <Col>Espaço</Col>
                    <Col>Expectativa de Venda</Col>
                    <Col>É viável?</Col>
                </Row>
                <Row>
                    <Col>Abobrinhas do Matias</Col>
                    <Col>100</Col>
                    <Col>250</Col>
                    <Col>125</Col>
                    <Col>500</Col>
                    <Col>SIM</Col>
                </Row>
            </Container>
        )
    }
}

export default History;