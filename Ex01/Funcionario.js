export default class Funcionario {
    constructor(cpf, nome, salario) {
        this.cpf = cpf;
        this.nomeCompleto = nome;
        this.salario = salario;
    }

    promover(percentual) {
        this.salario = this.salario * (1 + percentual / 100);
    }
}
