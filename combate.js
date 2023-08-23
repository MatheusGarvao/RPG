import PromptSync from 'prompt-sync';
import Dados from './dados.js';

/**
 * Classe que representa o sistema de combate entre um personagem e um inimigo.
 * @class
 * @classdesc Esta classe gerencia a mecânica de combate em um jogo, permitindo que um personagem
 * e um inimigo se enfrentem em uma série de turnos.
 */
class Combate {
    /**
     * Construtor da classe Combate.
     * @constructor
     * @param {object} personagem - O personagem envolvido no combate.
     * @param {object} inimigo - O inimigo envolvido no combate.
     */
    constructor(personagem, inimigo) {
        /**
         * O personagem envolvido no combate.
         * @type {object}
         */
        this.personagem = personagem;

        /**
         * O inimigo envolvido no combate.
         * @type {object}
         */
        this.inimigo = inimigo;

        /**
         * Indica de quem é o turno (1 para o personagem, 0 para o inimigo).
         * @type {number}
         */
        this.turno = 1;

        /**
         * Instância do prompt para leitura de input do usuário.
         * @type {PromptSync}
         */
        this.prompt = new PromptSync();

        /**
        * Instância da classe Dados para gerar resultados aleatórios.
        * @type {Dados}
        */
        this.dados = new Dados();
    }

    /**
     * Altera o turno atual.
     * @returns {string} - Mensagem informando o turno atual.
     */
    mudarTurno() {
        if (this.turno === 1) {
            this.turno = 0;
            return `\n---------\nTurno de ${this.inimigo.nome}\n ${this.mostrarVida()}`;
        }
        this.turno = 1;
        return `\n---------\nSeu turno, ${this.personagem.nome}\n ${this.mostrarVida()}`;
    }

    /**
     * Permite ao jogador escolher sua ação ou ao inimigo retornar a sua ação.
     * @returns {number} - Ação escolhida pelo jogador ou pelo inimigo (1 para atacar, -1 para desistir).
     */
    definirMovimento() {
        if (this.turno === 1) {
            let valor;
            do {
                console.log("O que deseja fazer?");
                console.log(" 1 - ATACAR");
                console.log("-1 - DESISTIR");
                valor = parseInt(this.prompt());

                if ((valor <= 0 && valor !== -1) || valor > 1) {
                    console.log("OPÇÃO INVÁLIDA");
                }
            } while ((valor <= 0 && valor !== -1) || valor > 1);
            return valor;
        }
        return this.turnoInimigo();
    }

    /**
     * Realiza um ataque e reduz a vida do alvo.
     * @param {number} dano - O dano causado pelo ataque.
     * @returns {string} - Mensagem descrevendo o resultado do ataque.
     */
    ataque() {
        if (this.turno === 1) {
            let dano = this.personagem.atacar();
            this.inimigo.vida -= dano;
            return `Ataque realizado, causando ${dano} de dano`;
        }
        let dano = this.inimigo.atacar();
        this.personagem.vida -= dano;
        return `${this.inimigo.nome} te atacou, causando ${dano} de dano`;
    }

    /**
     * Simula o turno do inimigo.
     * @returns {number} - Gera uma ação aleatória para o adversário.
     */
    turnoInimigo() {
        return this.dados.rodarDados(1);
    }

    /**
     * Retorna uma string com as vidas do personagem e do inimigo.
     * @returns {string} - Mensagem mostrando a vida do personagem e do inimigo.
     */
    mostrarVida() {
        return `Sua vida: ${this.personagem.vida}\nVida de ${this.inimigo.nome}: ${this.inimigo.vida}\n`;
    }
}

export default Combate;
