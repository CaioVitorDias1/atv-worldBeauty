import Empresa from "./entities/empresa";

import Entrada from "./functions/entradaInput";
import CadastroCliente from "./services/cadastrarCliente";
import ListagemClientes from "./services/listarClientes";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)

let execucao = true

let empresa = new Empresa()
let entrada = new Entrada()
let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`0 - Sair`);

    

        switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}