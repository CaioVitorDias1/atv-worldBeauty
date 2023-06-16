import { Component } from "react";
import Header from "../components/header";
import "../styles/listagem.css"
import axios from "axios";
// class Listagem extends Component{
//     render(){

//         return(
//             <div>
//                 <Header />
//                 <h1>Listagem de clientes !</h1>

//                 <h2>Qual o tipo da listagem desejada? </h2>

//                 <div className="divmenu">
//                 <label>Listar todos os clientes</label>
//                 <button className="botao">Escolher</button>

//                 <label>Listar clientes por gênero</label>
//                 <button className="botao">Escolher</button>
                
//                 <label>Listar 10 clientes que mais consumiram produtos</label>
//                 <button className="botao">Escolher</button>
                
//                 <label>Listar 10 clientes que menos consumiram produtos</label>
//                 <button className="botao">Escolher</button>
                
//                 <label>Listar os 5 clientes que mais consumiram em valor</label>
//                 <button className="botao">Escolher</button>
                
//                 <label>Listar os produtos mais consumidos</label>
//                 <button className="botao">Escolher</button>
                
//                 <label>Listar os produtos mais consumidos por gênero</label>
//                 <button className="botao">Escolher</button>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Listagem

export default function Listagem(){

    function handleSubmit(e){
        e.preventDefault()

        axios.get("http://localhost:32832/clientes")
        .then( res => {
            let resposta = res.data
            console.log(resposta)
        })
    }


    return (
        <div>
            <Header />
            <h1>Listagem de clientes !</h1>

            <h2>Qual o tipo da listagem desejada? </h2>

        <div className="divmenu">
            <label>Listar todos os clientes</label>
            <button className="botao" onClick={handleSubmit}>Escolher</button>

            <label>Listar clientes por gênero</label>
            <button className="botao">Escolher</button>
                
            <label>Listar 10 clientes que mais consumiram produtos</label>
            <button className="botao">Escolher</button>
                
            <label>Listar 10 clientes que menos consumiram produtos</label>
            <button className="botao">Escolher</button>
                
            <label>Listar os 5 clientes que mais consumiram em valor</label>
            <button className="botao">Escolher</button>
                
            <label>Listar os produtos mais consumidos</label>
            <button className="botao">Escolher</button>
                
            <label>Listar os produtos mais consumidos por gênero</label>
            <button className="botao">Escolher</button>
        </div>
        </div>
    )
}