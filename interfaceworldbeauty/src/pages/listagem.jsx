import { Component } from "react";
import Header from "../components/header";

class Listagem extends Component{
    render(){

        return(
            <div>
                <Header />
                <h1>Listagem de clientes !</h1>

                <h2>Qual o tipo da listagem desejada? </h2>

                <label>Listar todos os clientes</label>
                <button></button>

                <label>Listar clientes por gênero</label>
                <button></button>
                
                <label>Listar 10 clientes que mais consumiram produtos</label>
                <button></button>
                
                <label>Listar 10 clientes que menos consumiram produtos</label>
                <button></button>
                
                <label>Listar os 5 clientes que mais consumiram em valor</label>
                <button></button>
                
                <label>Listar os produtos mais consumidos</label>
                <button></button>
                
                <label>Listar os produtos mais consumidos por gênero</label>
                <button></button>
            </div>
        )
    }
}

export default Listagem