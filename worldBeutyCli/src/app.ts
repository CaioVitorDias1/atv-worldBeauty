import Empresa from "./entities/empresa";

import Entrada from "./functions/entradaInput";
import CadastroCliente from "./services/cadastrarCliente";
import ListagemClientes from "./services/listarClientes";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)

let execucao = true

let empresa = new Empresa()


while (execucao) {
    console.log("Opções:");
    console.log("1 - Cadastrar clientes automaticamente");
    console.log("2 - Cadastrar cliente");
    console.log("3 - Listar todos os clientes");
    console.log("4 - Listar todos os clientes por gênero");
    console.log("5 - Listar os 10 clientes que mais consumiram produtos");
    console.log("6 - Listar os 10 clientes que menos consumiram produtos");
    console.log("7 - Listar os 5 clientes que mais consumiram em valor");
    console.log("8 - Listar os produtos mais consumidos");
    console.log("9 - Listar os produtos mais consumidos por gênero")
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
    

        switch (opcao) {
        case 2:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 3:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;

        case 5:
            let listagem10clienteProduto = new ListagemClientes(empresa.getClientes)
            listagem10clienteProduto.listar10clientesmaisconsumiramprodutos()
            break;

        case 1: 
            let cadastrarAutomatico = new CadastroCliente(empresa.getClientes)
            cadastrarAutomatico.cadastrarClientesAutomatico()
            break

        case 6:
            let listagem10clienteProdutomenos = new ListagemClientes(empresa.getClientes)
            listagem10clienteProdutomenos.listar10clientesmenosconsumiramprodutos()
            break

        case 4: 
            let listagemGenero = new ListagemClientes(empresa.getClientes)
            listagemGenero.listarClientesGenero()
            break

        case 8: 
            let produtosMaisConsumidos = new ListagemClientes(empresa.getClientes)
            produtosMaisConsumidos.listarProdutosMaisConsumidos()
            break

        case 9: 
            let produtosMaisConsumidosGenero = new ListagemClientes(empresa.getClientes)
            produtosMaisConsumidosGenero.listarProdutosMaisConsumidosPorGenero()
            break

        case 7:
            let listar5clientesConsumoValor = new ListagemClientes(empresa.getClientes)
            listar5clientesConsumoValor.listar5clientesMaisConsumiramValor()
            break
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}