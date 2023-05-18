import Cliente from "../entities/cliente";
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
        
        // this.clientes.forEach(element => {
        //     while(contador < 10){
        //         this.listaClientes.push(element)
        //         console.log(element);
        //         contador ++
        //         break
        //     }
        // })
    }
}