import promptSync from 'prompt-sync';
import Gerador from './geradores.js';


//const prompt = promptSync();
//const personagem = gerador.gerarPersonagem(prompt("Qual o nome do seu personagem? "))

const gerador = new Gerador();

let historiaIndex = 0;
let historia = gerador.gerarHistoria(historiaIndex);

while (historia) {
    historiaIndex++;
    historia.historia = historia.historia.replace("{{personagem}}", "Matheus").replace("{{inimigo}}", "Esqueleto")
    console.log(historia)
    historia = gerador.gerarHistoria(historiaIndex, historia.proximos)
    
}
