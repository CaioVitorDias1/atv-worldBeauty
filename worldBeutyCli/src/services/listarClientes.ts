import Cliente from "../entities/cliente";
import Produto from "../entities/produto";
import Listagem from "../interface/listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    private listaClientes: Array<Cliente> = []
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.genero);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }

    public listar10clientesmaisconsumiramprodutos(): void {
        const clientes10 = this.clientes
        .sort((clienteA, clienteB) => clienteB.getProdutosConsumidos.length - clienteA.getProdutosConsumidos.length)
        .slice(0, 10);
        // let contador = 0;
        clientes10.forEach((cliente, index) => {
            console.log(`Cliente ${index + 1}: ${cliente.nome} - Produtos consumidos: ${cliente.getProdutosConsumidos.length}`);
          });
    }

    public listar10clientesmenosconsumiramprodutos(): void {
        const clientes10 = this.clientes
        .sort((clienteA, clienteB) => clienteA.getProdutosConsumidos.length - clienteB.getProdutosConsumidos.length)
        .slice(0, 10);

        clientes10.forEach((cliente, index) => {
            console.log(`Cliente ${index + 1}: ${cliente.nome} - Produtos consumidos: ${cliente.getProdutosConsumidos.length}`);
          });
    }

    public listarClientesGenero(): void {
        const allClientes = this.clientes
        let mulheres: Array<Cliente> = []
        let homens: Array<Cliente> = []
        allClientes.forEach((cliente) => {
            if(cliente.genero === "mulher"){
                mulheres.push(cliente);
            } else {
                homens.push(cliente);
            }
        })

        console.log("Mulheres cadastradas:")
        mulheres.forEach((cliente) => {
            console.log(`Cliente nome: ${cliente.nome}`);
        });

        console.log("Homens cadastrados:")
        mulheres.forEach((cliente) => {
            console.log(`Cliente nome: ${cliente.nome}`);
        });
    }

    // public listarProdutosMaisConsumidos(): void {
    //     const todosClientes = this.clientes
    //     let contadorCreme = 0
    //     let contadorGel = 0
    //     let produtosConsumidos = []
    //     todosClientes.forEach((cliente) => {
    //         produtosConsumidos = cliente.getProdutosConsumidos
    //         produtosConsumidos.forEach((produto) =>{
    //             if(produto.nome === "creme"){

    //             }
    //         })

    //     })
    // }
    public listarProdutosMaisConsumidos(): void {
        let produtos: Array<Produto> = []
        const clientela = this.clientes
        clientela.forEach((produto) => {
            produto.getProdutosConsumidos.forEach((produto) =>{
                let prod = new Produto()
                prod.nome = produto.nome
                produtos.push(prod)
            })
        })
        const produtosMaisConsumidos = produtos.reduce((contador, produto) => {
            contador.set(produto, (contador.get(produto) || 0) + 1);
            return contador;
          }, new Map<Produto, number>());
        
          const sortedProdutos = Array.from(produtosMaisConsumidos.entries()).sort((a, b) => b[1] - a[1]).slice(0, 10);
        
          sortedProdutos.forEach(([produto, quantidade], index) => {
            console.log(`Produto ${index + 1}: ${produto.nome} - Quantidade consumida: ${quantidade}`);
          });
    }

    public listarProdutosMaisConsumidosPorGenero(): void {
        const generoContagem = new Map<string, Map<Produto, number>>();

        this.clientes.forEach((cliente) => {
        const genero = cliente.genero === 'homem' ? 'homem' : 'mulher';

        if (!generoContagem.has(genero)) {
        generoContagem.set(genero, new Map<Produto, number>());
        }

        const produtosMaisConsumidosGenero = generoContagem.get(genero);

        if (produtosMaisConsumidosGenero) {
            cliente.getProdutosConsumidos.forEach((produto) => {
            produtosMaisConsumidosGenero.set(produto, (produtosMaisConsumidosGenero.get(produto) || 0) + 1);
            });
        }
        });

        generoContagem.forEach((produtosMaisConsumidos, genero) => {
        console.log(`Produtos mais consumidos por ${genero}:`);

        const sortedProdutos = Array.from(produtosMaisConsumidos.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);

        sortedProdutos.forEach(([produto, quantidade], index) => {
        console.log(`  Produto ${index + 1}: ${produto.nome} - Quantidade consumida: ${quantidade}`);
        });
    });
    }

    public listar5clientesMaisConsumiramValor(): void {
        const top5Clientes = this.clientes
        .sort((clienteA, clienteB) => {
        const valorTotalA = clienteA.getProdutosConsumidos.reduce((total, produto) => total + produto.valor, 0);
        const valorTotalB = clienteB.getProdutosConsumidos.reduce((total, produto) => total + produto.valor, 0);
        return valorTotalB - valorTotalA;
        })
        .slice(0, 5);

        top5Clientes.forEach((cliente, index) => {
        const valorTotal = cliente.getProdutosConsumidos.reduce((total, produto) => total + produto.valor, 0);
        console.log(`Cliente ${index + 1}: ${cliente.nome} - Valor total consumido: ${valorTotal}`);
        })
    }
}