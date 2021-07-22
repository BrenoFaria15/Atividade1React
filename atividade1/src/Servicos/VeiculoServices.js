import axios from 'axios'


const urlbase = "http://localhost:8080/veiculo";
const url_veiculos = "http://localhost:8080/veiculo/all";

class VeiculoServices{

        getVeiculo(){
            return axios.get(urlbase+"/all");
        }

        deleteVeiculo(id){
            return axios.delete(urlbase+"/deletar_veiculo/"+id);
        }

        createVeiculo(veiculo){
            return axios.post(urlbase+"/addveiculo/",veiculo);

        }

        editVeiculo(veiculo){
            return axios.put(urlbase+"/atualizar_veiculo/"+veiculo.id_veiculo,veiculo);

        }

        getVeiculoById(id){
            return axios.get(urlbase+"/localizar_veiculo/"+id);
        }

}

export default new VeiculoServices();