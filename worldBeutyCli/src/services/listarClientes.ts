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
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }

    public listar10clientesmaisconsumiramprodutos(): void {
        
        // let contador = 0;

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