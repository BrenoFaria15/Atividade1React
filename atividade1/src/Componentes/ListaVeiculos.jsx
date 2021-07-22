import React, { Component } from 'react';
import {Container,Row,Table,Button, Col } from 'react-bootstrap';
import VeiculoServices from '../Servicos/VeiculoServices';


class ListaVeiculos extends Component {

    constructor(props){
       super(props);
            this.state = { 
                veiculos:[]
            };   
            
            this.voltar = this.voltar.bind(this);
            this.excluir = this.excluir.bind(this);
            this.novoVeiculo = this.novoVeiculo.bind(this);
            this.editar = this.editar.bind(this);
   }

        componentDidMount(){
            this.getVeiculos();

        }

        getVeiculos(){
            VeiculoServices.getVeiculo().then(
             (resposta) =>
                this.setState({veiculos:resposta.data}));
                

        }

        voltar(){
            this.props.history.push("/");
        }

        excluir(id){
                VeiculoServices.deleteVeiculo(id).then(
                res => {alert(res.data)
                this.getVeiculos();
                });
        }
        
        novoVeiculo(){
            this.props.history.push("/novoveiculo/_add");
        }

        editar(id){
            this.props.history.push("/atualizar_veiculo/"+id);

        }

    render() {
        return (
            <Container>
                <Row>
                <h1>Listagem de Veiculos</h1>
                </Row>
                <Row>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            
                            <th>Renavan</th>
                            <th>Marca</th>
                            <th>Placa</th>
                            <th>Modelo</th>
                            <th>Tipo de Combustível</th>
                            <th>Cor</th>
                            <th>Ano</th>
                            <th>Ações</th>
                        </tr>
                 </thead>
                     <tbody>
                         
                         {
                        this.state.veiculos.map(
                            veiculo =>
                                    <tr key = {veiculo.id_veiculo}>
                                    <td>
                                        {veiculo.renavan}
                                    </td>
                                    <td>
                                        {veiculo.marca}
                                    </td>
                                    <td>
                                        {veiculo.placa}
                                    </td>
                                    <td>
                                        {veiculo.modelo}
                                    </td>
                                    <td>
                                        {veiculo.tipo_comb}
                                    </td>
                                    <td>
                                       {veiculo.cor}
                                    </td>
                                    <td>
                                        {veiculo.ano}
                                    </td>
                                    <td> 
                                        <Button variant="outline-warning" onClick={() => this.editar(veiculo.id_veiculo)}>Editar</Button>
                                        <Button variant="outline-danger" onClick={() => this.excluir(veiculo.id_veiculo)}>Excluir</Button>
                                    
                                    </td>
                                </tr> 
                        

                            )
                        }
                        

                    </tbody>   

                     </Table>
                </Row> 
                <Row > 
                <Col>
                <Button className="float-left" variant="link" onClick={this.voltar}>Voltar</Button>   
                </Col>
                <Col>
                <Button className="float-right" variant="outline-dark" onClick={this.novoVeiculo} >Novo Veiculo</Button>   
                </Col>
                
                </Row>   
        </Container>
        );
    }
}

export default ListaVeiculos;