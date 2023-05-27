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

    
    return(
        <div>
            <Header />
            <div className="divtitulos">
            <h1>Cadastro de clientes!</h1>
            </div>
            <label>Nome</label>
            <input></input>
            <label>Gênero</label>
            <input></input>
            <label>CPF</label>
            <input></input>
            <label>Data de emissão</label>
            <input></input>
        </div>
    )
}