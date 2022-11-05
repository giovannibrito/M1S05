export default class Time {
    constructor(nome, sigla) {
        this.nome = nome;
        this.sigla = sigla;
        this.vitorias = 0;
        this.derrotas = 0;
        this.empates = 0;
        this.golsMarcados = 0;
        this.golsSofridos = 0;
    }

    get numeroDeJogos() {
        return this.vitorias + this.derrotas + this.empates;
    }

    get numeroDePontos() {
        return this.vitorias * 3 + this.empates;
    }

    computarPartida(objPartida) {
        let golsPro, golsContra;

        if (objPartida.siglaA === this.sigla) {
            golsPro = objPartida.golsA;
            golsContra = objPartida.golsB;
        } else if (objPartida.siglaB === this.sigla) {
            golsPro = objPartida.golsB;
            golsContra = objPartida.golsA;
        } else return;

        this.golsMarcados += golsPro;
        this.golsSofridos += golsContra;

        if (golsPro > golsContra) this.vitorias++;
        if (golsPro < golsContra) this.derrotas++;
        if (golsPro === golsContra) this.empates++;
    }

    exibirSituacao() {
        console.log(this);
    }
}
