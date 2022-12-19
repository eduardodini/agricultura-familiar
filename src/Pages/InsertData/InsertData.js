import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

class InsertData extends Component {
    
    state = {
        showResults: false,
        hasViability: false,
        productName: '',
        seedsCost: '0',
        fertilizerCost: '0',
        spaceCosts: '0',
        revenueExpec: '0',
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
        
        if(parseInt(this.state.revenueExpec) - parseInt(this.state.seedsCost) - parseInt(this.state.fertilizerCost) - parseInt(this.state.spaceCosts) <= 0) {
            this.setState({hasViability: true})
        } else {
            this.setState({hasViability: false})
        }
    }

    handleClick = (event) => {
        console.log("Hello world")
        this.setState({[event.target.name]: true})
    }

    render() {
        const { showResults, hasViability, productName, seedsCost, fertilizerCost, spaceCosts, revenueExpec } = this.state
        const inputValues = { showResults, hasViability, productName, seedsCost, fertilizerCost, spaceCosts, revenueExpec }
        
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
                    this.state.hasViability? <h1>A produção TEM viabilidade econômica, LUCRO de R${parseInt(revenueExpec) - parseInt(seedsCost) - parseInt(fertilizerCost) - parseInt(spaceCosts)}</h1> : <h1>A produção NÃO TEM viabilidade econômica, PREJUÍZO de R${parseInt(revenueExpec) - parseInt(seedsCost) - parseInt(fertilizerCost) - parseInt(spaceCosts)}</h1>
                    : 
                    null}
                </Container>
            </Container>
        )
    }
}

export default InsertData;