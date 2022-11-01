export default class Personagem {
    constructor(nome) {
        this.nome = nome;
        this.percentualVida = 100;
    }

    sofreuDano(dano) {
        this.percentualVida = dano > this.percentualVida ? 0 : this.percentualVida - dano;
    }

    usouKitMedico() {
        this.percentualVida = this.percentualVida > 90 ? 100 : this.percentualVida + 10;
    }
}
