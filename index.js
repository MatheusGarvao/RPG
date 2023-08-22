import promptSync from 'prompt-sync';
import Gerador from './geradores.js';

const prompt = promptSync();
const gerador = new Gerador();

const personagem = gerador.gerarPersonagem(prompt("Qual o nome do seu personagem? "));

let historiaIndex = 0;
let historia = 1; 

while (historia.proximos !== null) {
    const inimigo = gerador.gerarInimigo();
    historia = gerador.gerarHistoria(historiaIndex, personagem, inimigo, historia.proximos);
    console.log(historia)
    historiaIndex++;
}
