export default class Juros {
    constructor(capital, taxa, tempo) {
        this.capitalInicial = capital;
        this.taxaAplicada = taxa;
        this.tempo = tempo;
    }

    calcularJurosSimples() {
        return (this.capitalInicial * this.taxaAplicada * this.tempo).toFixed(2);
    }

    calcularJurosCompostos() {
        return (this.capitalInicial * (1 + this.taxaAplicada) ** this.tempo).toFixed(2);
    }
}
