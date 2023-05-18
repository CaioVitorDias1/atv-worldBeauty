import Empresa from "./entities/empresa";

import Entrada from "./functions/entradaInput";
import CadastroCliente from "./services/cadastrarCliente";
import ListagemClientes from "./services/listarClientes";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)

let execucao = true

let empresa = new Empresa()


while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log("3 - Listar os 10 clientes que mais consumiram produtos");
    console.log(" Listar todos os clientes por gênero");
    console.log(" Listar os produtos mais consumidos");
    console.log(" Listar os produtos mais consumidos por gênero");
    console.log(" Listar os 10 clientes que menos consumiram produtos");
    console.log(" Listar os 5 clientes que mais consumiram em valor");
    console.log(" 4 - Cadastrar clientes automaticamente")
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
    

        switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;

        case 3:
            let listagem10clienteProduto = new ListagemClientes(empresa.getClientes)
            listagem10clienteProduto.listar10clientesmaisconsumiramprodutos()
            break;

        case 4: 
            let cadastrarAutomatico = new CadastroCliente(empresa.getClientes)
            cadastrarAutomatico.cadastrarClientesAutomatico()
            break
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}