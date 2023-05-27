import axios from "axios";
import { useState } from "react";
import { Component } from "react";
import Header from "../components/header";

// class Cadastro extends Component{
//     render(){

//         return(
//             <div>
//                 <Header />
//                 <div className="divtitulos">
//                 <h1>Cadastro de clientes!</h1>
//                 </div>
//                 <label>Nome</label>
//                 <input></input>
//                 <label>Gênero</label>
//                 <input></input>
//                 <label>CPF</label>
//                 <input></input>
//                 <label>Data de emissão</label>
//                 <input></input>
//             </div>
//         )
//     }
// }

// export default Cadastro

export default function Cadastro(){
    const [nome, setNome] = useState("")
    const [genero, setGenero] = useState("")
    const [cpf, setCpf] = useState("")
    const [data, setData] = useState("")

    
    let objetoCliente = {
        nome: nome,
        genero: genero,
        cpf: cpf,
        data: data
    }

    function handleSubmit(e){
        e.preventDefault()

        axios.post("http://localhost:32832/cliente/cadastrar" , objetoCliente)
        .then( res => {
            let resposta = res.data
            console.log(resposta)
        })
    }
    
    return(
        <div>
            <Header />
            <div className="divtitulos">
                <h1>Cadastro de clientes!</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Nome</label>
                <input onChange={(e) => setNome(e.target.value)}></input>
                <label>Gênero</label>
                <input onChange={(e) => setGenero(e.target.value)}></input>
                <label>CPF</label>
                <input onChange={(e) => setCpf(e.target.value)}></input>
                <label>Data de emissão</label>
                <input type="date" onChange={(e) => setData(e.target.value)}></input>
                <button type="submit"> Cadastrar</button>
            </form>
        </div>
    )
}