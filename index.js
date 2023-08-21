import CarregarObjetos from "./carregarObjetos.js";
import Dados from "./dados.js";
import Personagem from "./personagem.js";
import promptSync from 'prompt-sync';

const carregador = new CarregarObjetos();
const dados = new Dados();
const prompt = promptSync();

function iniciarGame() {
    const nome = prompt('Qual é o nome do seu personagem? ');
    return nome;
}

function gerarArma() {
    const armas = carregador.carregarJson(1);
    const randomIndex = dados.rodarDados(armas.length) - 1;
    return armas[randomIndex];
}

const personagem = new Personagem({ "nome": iniciarGame(), "arma": gerarArma(), "vida": 10 });
console.log(personagem);
console.log(personagem.atacar())
console.log(personagem.arma);
console.log(personagem.arma.dados.rodarDados(5))