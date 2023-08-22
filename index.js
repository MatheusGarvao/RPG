import promptSync from 'prompt-sync';
import Gerador from './geradores.js';


const prompt = promptSync();
const gerador = new Gerador();

const personagem = gerador.gerarPersonagem(prompt("Qual o nome do seu personagem? "))
console.log(personagem)