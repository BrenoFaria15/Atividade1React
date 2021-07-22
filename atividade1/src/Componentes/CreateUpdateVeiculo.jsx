import React, { Component } from 'react';
import {Container,Row,Button,Form } from 'react-bootstrap';
import VeiculoServices from '../Servicos/VeiculoServices';

class CreateUpdateVeiculo extends Component {
   constructor(props){
        super(props);

        this.state = {
            id_veiculo: this.props.match.params.id,
            renavan:"",
            marca:"",
            placa:"",
            modelo:"",
            tipo_comb:"",
            cor:"",
            ano:""

        }

        this.changeRenavanHandler = this.changeRenavanHandler.bind(this);
        this.changeMarcaHandler = this.changeMarcaHandler.bind(this);
        this.changePlacaHandler = this.changePlacaHandler.bind(this);
        this.changeModeloHandler = this.changeModeloHandler.bind(this);
        this.changeTipoCombHandler = this.changeTipoCombHandler.bind(this);
        this.changeCorHandler = this.changeCorHandler.bind(this);
        this.changeAnoHandler = this.changeAnoHandler.bind(this);
        this.salvarVeiculo = this.salvarVeiculo.bind(this);
        this.cancelar = this.cancelar.bind(this);

   }
   
        componentDidMount(){
            if(this.state.id_veiculo ==="_add"){
                return false;
            }else{
                VeiculoServices.getVeiculoById(this.state.id_veiculo).then(
                    (res) => {
                        let veiculo = res.data;
                        this.setState({
                            renavan: veiculo.renavan,
                            marca: veiculo.marca,
                            placa: veiculo.placa,
                            modelo: veiculo.modelo,
                            tipo_comb: veiculo.tipo_comb,
                            cor: veiculo.cor,
                            ano: veiculo.ano
                         });

                    }


                );
            }

        }
   
   
        changeRenavanHandler(event){
           this.setState({renavan: event.target.value}) 
        }
        
        changeMarcaHandler(event){
            this.setState({marca: event.target.value}) 
        }

        changePlacaHandler(event){
            this.setState({placa: event.target.value}) 
        }

        changeModeloHandler(event){
            this.setState({modelo: event.target.value}) 
        }

        changeTipoCombHandler(event){
            this.setState({tipo_comb: event.target.value}) 
        }

        changeCorHandler(event){
            this.setState({cor: event.target.value}) 
        }

        changeAnoHandler(event){
            this.setState({ano: event.target.value}) 
        }

        cancelar(){
            this.props.history.push("/veiculos");
        }


        
        salvarVeiculo(){

            let veiculo = {
                renavan : this.state.renavan,
                marca : this.state.marca,
                placa : this.state.placa,
                modelo : this.state.modelo,
                tipo_comb : this.state.tipo_comb,
                cor : this.state.cor,
                ano : this.state.ano

            }
         if(this.state.veiculo === "_add"){   
            VeiculoServices.createVeiculo(veiculo).then(
            (res) => {
                alert(res.data);
                
            });

        }else{
            veiculo.id_veiculo= this.state.id_veiculo;
            VeiculoServices.editVeiculo(veiculo).then(
                (res) => {console.log(res.data)}

            );

            }
            this.props.history.push("/veiculos");
        }   
   
   
   
    render() {
        return (
            <Container>
            <Row className="justify-content-md-center">    
                <h1>Cadastro de Veiculos</h1>
            </Row>
            
            <Form>
                <Form.Group controlId="formrenavan">
                <Form.Text className="text-muted">
                        Digite o Renavan:
                    </Form.Text>
                    <Form.Control type="text" placeholder="renavan" value={this.state.renavan} onChange={this.changeRenavanHandler}/>
                </Form.Group>

                <Form.Group controlId="formmarca">
                <Form.Text className="text-muted">
                        Digite a Marca:
                    </Form.Text>
                    <Form.Control type="text" placeholder="marca" value={this.state.marca} onChange={this.changeMarcaHandler}/>
                </Form.Group>

                <Form.Group controlId="formplaca">
                <Form.Text className="text-muted">
                        Digite a Placa:
                    </Form.Text>
                    <Form.Control type="text" placeholder="placa" value={this.state.placa} onChange={this.changePlacaHandler}/>
                </Form.Group>

                <Form.Group controlId="formmodelo">
                    <Form.Text className="text-muted">
                        Digite o Modelo:
                    </Form.Text>
                    
                    <Form.Control type="text" placeholder="modelo" value={this.state.modelo} onChange={this.changeModeloHandler}/>
                </Form.Group>

                <Form.Group controlId="formtipo_comb">
                    < Form.Text className="text-muted">
                        Digite o Tipo de Combustivel:
                    </Form.Text>
                    <Form.Control type="text" placeholder="Tipo de Combustivel" value={this.state.tipo_comb} onChange={this.changeTipoCombHandler}/>
                </Form.Group>

                <Form.Group controlId="formcor">
                    <Form.Text className="text-muted">
                        Digite a Cor:
                    </Form.Text>
                    
                    <Form.Control type="text" placeholder="cor" value={this.state.cor} onChange={this.changeCorHandler}/>
                </Form.Group>

                <Form.Group controlId="formano">
                    <Form.Text className="text-muted">
                        Digite o Ano:
                    </Form.Text>
                    <Form.Control type="text" placeholder="ano" value={this.state.ano} onChange={this.changeAnoHandler}/>
                    
                </Form.Group>

                <Row className="float-right">
                <Button variant="success" onClick={this.salvarVeiculo}>Salvar</Button>
                <Button variant="danger" onClick={this.cancelar}>Cancelar</Button> 

                </Row>
                
            </Form>
            </Container>
        );
    }
}

export default CreateUpdateVeiculo;