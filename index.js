import promptSync from 'prompt-sync';
import Gerador from './geradores.js';
import Combate from './combate.js'

const prompt = promptSync();
const gerador = new Gerador();

var personagem = gerador.gerarPersonagem(prompt("Qual o nome do seu personagem? "));

let historiaIndex = 0;
let historia = 1;

while (historia.proximos !== null) {
    let inimigo = gerador.gerarInimigo();
    historia = gerador.gerarHistoria(historiaIndex, personagem, inimigo, historia.proximos);
    console.log(historia.historia + "\n")
    const combate = new Combate(personagem, inimigo);


    while (combate.personagem.vida > 0 && combate.inimigo.vida > 0) {

        switch (combate.definirMovimento()) {
            case 1: {
                console.log(combate.ataque());
                break;
            }
            case -1: {
                combate.personagem.vida = 0;
                break;
            }
        }

        if (combate.personagem.vida <= 0 || combate.inimigo.vida <= 0) {
            break;
        }

        console.log(combate.mudarTurno());
    }

    personagem = combate.personagem;
    inimigo = combate.inimigo.vida;

    if (personagem.vida <= 0) {
        console.log("O seu personagem morreu!")
        break;
    }

    historiaIndex++;
}