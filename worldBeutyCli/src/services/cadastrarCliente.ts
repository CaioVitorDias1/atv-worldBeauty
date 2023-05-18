import Cliente from "../entities/cliente"
import CPF from "../entities/cpf"
import Entrada from "../functions/entradaInput"
import Cadastro from "../interface/cadastro"

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let genero = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        let cliente = new Cliente(nome, genero, cpf);
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }


    public cadastrarClientesAutomatico(): void {
        console.log("CADASTRANDO CLIENTES AUTOMATICAMENTE")
        
        let nome1 = "Geraldo"
        let nome2 = "Augusto"
        let nome3 = "Sheila"

        let genero1 = "homem"
        let genero2 = "homem"
        let genero3 = "homem"

        let cpf1 = "12345678932"
        let cpf2 = "56709831123"
        let cpf3 = "23487634523"
        let dataemissao = new Date ("2000-12-12")

        let cpf = new CPF(cpf1, dataemissao)
        let cpff = new CPF(cpf2, dataemissao)
        let cpfff = new CPF(cpf3, dataemissao)


        let cliente1 = new Cliente(nome1, genero1, cpf)
        let cliente2 = new Cliente(nome2, genero2, cpff)
        let cliente3 = new Cliente(nome3, genero3, cpfff)

        this.clientes.push(cliente1, cliente2, cliente3)
        console.log("cadastro concluído!")
        
    }
}