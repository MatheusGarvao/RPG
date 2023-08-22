import promptSync from 'prompt-sync';
import Gerador from './geradores.js';
import Combate from './combate.js'

const prompt = promptSync();
const gerador = new Gerador();

const personagem = gerador.gerarPersonagem(prompt("Qual o nome do seu personagem? "));

let historiaIndex = 0;
let historia = 1;

while (historia.proximos !== null) {
    const inimigo = gerador.gerarInimigo();
    historia = gerador.gerarHistoria(historiaIndex, personagem, inimigo, historia.proximos);
    console.log(historia.historia + "\n")
    const combate = new Combate(personagem, inimigo);


    while (combate.personagem.vida > 0 && combate.inimigo.vida > 0) {
        console.log(`Sua vida: ${combate.personagem.vida} \n`)
        console.log(`Vida de ${combate.inimigo.nome}: ${combate.inimigo.vida}\n`)
        if (combate.turno === 1) {
            switch (combate.definirMovimento()) {
                case 1: {
                    console.log(combate.ataque(personagem.atacar()));
                    break;
                }
                case -1: {
                    combate.personagem.vida = 0;
                    break;
                }
            }

        } else {
            console.log(combate.turnoInimigo());
        }

        if (combate.personagem.vida <= 0 || combate.inimigo.vida <= 0) {
            break;
        }

        console.log(combate.mudarTurno());
    }

    personagem.vida = combate.personagem.vida;
    inimigo.vida = combate.inimigo.vida;

    if (personagem.vida < 0) {
        console.log("O seu personagem morreu!")
        break;
    }

    historiaIndex++;
}

