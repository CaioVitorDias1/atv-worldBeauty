import axios from "axios";
import { useState } from "react";
import { Component } from "react";
import Header from "../components/header";
import "../styles/cadastro.css"

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
            <div className="divtitulo">
                <h1>Cadastro de clientes!</h1>
            </div>
            <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="form ix">
                <label>Nome</label>
                <input onChange={(e) => setNome(e.target.value)}></input>
                </div>
                <div className="form ix">
                <label>Gênero</label>
                <input onChange={(e) => setGenero(e.target.value)}></input>
                </div>
                <div className="form ix">
                <label>CPF</label>
                <input onChange={(e) => setCpf(e.target.value)}></input>
                </div>
                <div  className="form ix">
                <label>Data de emissão</label>
                <input type="date" onChange={(e) => setData(e.target.value)}></input>
                </div>
                <div className="form ix">
                <button type="submit" className="boatao"> Cadastrar</button>
                </div>
            </form>
            </div>
        </div>
    )
}