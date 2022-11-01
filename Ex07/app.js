import Time from "./Time.js";
import Partida from "./Partida.js";

const guarani = new Time("Guarani", "GFC");
const jogo1 = new Partida("GFC", 8, "CRF", 0); //vitória
const jogo2 = new Partida("SEP", 1, "GFC", 3); //vitória
const jogo3 = new Partida("GFC", 2, "CAM", 2); //empate
const jogo4 = new Partida("RMA", 2, "GFC", 1); //derrota

guarani.computarPartida(jogo1);
guarani.computarPartida(jogo2);
guarani.computarPartida(jogo3);
guarani.computarPartida(jogo4);

guarani.exibirSituacao();
console.log("Número de jogos:", guarani.numeroDeJogos);
console.log("Número de pontos:", guarani.numeroDePontos);
