import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

class InsertData extends Component {
    
    state = {
        showResults: false,
        productName: '',
        seedsCost: '0',
        fertilizerCost: '0',
        spaceCosts: '0',
        revenueExpec: '0',
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleClick = (event) => {
        console.log("Hello world")
        this.setState({[event.target.name]: true})
    }

    render() {
        const { showResults, productName, seedsCost, fertilizerCost, spaceCosts, revenueExpec } = this.state
        const inputValues = { showResults, productName, seedsCost, fertilizerCost, spaceCosts, revenueExpec }
        
        return (
            <Container>
                <Form>
                    <br></br>
                    <Form.Group controlId='form.Name'>
                        <Form.Label>Nome do Empreendimento / Produto</Form.Label>
                        <Form.Control 
                        type="text" 
                        defaultValue={inputValues.productName}
                        name="productName"
                        onChange={this.handleChange} />                    
                    </Form.Group>

                    <br></br>
                    <h4>Custos de Produção</h4>
                    <Form.Group controlId='form.Seeds'>
                        <Form.Label>Sementes</Form.Label>
                        <Form.Control 
                        type="text" 
                        defaultValue={inputValues.seedsCost}
                        name="seedsCost"
                        onChange={this.handleChange}/>                    
                    </Form.Group>

                    <Form.Group controlId='form.Fertilizer'>
                        <Form.Label>Fertilizantes</Form.Label>
                        <Form.Control 
                        type="text" 
                        defaultValue={inputValues.fertilizerCost}
                        name="fertilizerCost"
                        onChange={this.handleChange}/>                    
                    </Form.Group>

                    <Form.Group controlId='form.Space'>
                        <Form.Label>Espaço (terreno, irrigação e outros gastos relacionados)</Form.Label>
                        <Form.Control 
                        type="text" 
                        defaultValue={inputValues.spaceCosts}
                        name="spaceCosts"
                        onChange={this.handleChange}
                        />                    
                    </Form.Group>

                    <br></br>
                    <h4>Expectativa de Venda</h4>
                    <Form.Group controlId='form.Space'>
                        <Form.Label>Valor esperado de venda de toda produção</Form.Label>
                        <Form.Control 
                        type="text" 
                        defaultValue={inputValues.revenueExpec}
                        name="revenueExpec"
                        onChange={this.handleChange}
                        />                    
                    </Form.Group>
                </Form>

                <br></br>
                <Button variant="primary" name="showResults" onClick={this.handleClick}>Calcular viabilidade</Button>
                
                <Container>
                    <br></br>
                    <br></br>
                    {this.state.showResults? 
                    <h1>Gastos de fertilizante + sementes: {parseInt(revenueExpec) - parseInt(seedsCost) - parseInt(fertilizerCost) - parseInt(spaceCosts)}</h1> : null}
                </Container>
            </Container>
        )
    }
}

export default InsertData;