import PromptSync from 'prompt-sync';

/**
 * Classe que representa o sistema de combate entre um personagem e um inimigo.
 * @classdesc Esta classe gerencia a mecânica de combate em um jogo, permitindo que um personagem
 * e um inimigo se enfrentem em uma série de turnos.
 */
class Combate {
    /**
     * Construtor da classe Combate.
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
    }

    /**
     * Altera o turno atual.
     * @returns {string} - Mensagem informando o turno atual.
     */
    mudarTurno() {
        if (this.turno === 1) {
            this.turno = 0;
            return `Turno de ${this.inimigo.nome} \n---------`;
        }
        this.turno = 1;
        return `Seu turno, ${this.personagem.nome} \n---------`;
    }

    /**
     * Permite ao jogador escolher sua ação.
     * @returns {number} - Ação escolhida pelo jogador (1 para atacar, -1 para desistir).
     */
    definirMovimento() {
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

    /**
     * Realiza um ataque e reduz a vida do alvo.
     * @param {number} dano - O dano causado pelo ataque.
     * @returns {string} - Mensagem descrevendo o resultado do ataque.
     */
    ataque(dano) {
        if (this.turno === 1) {
            this.inimigo.vida -= dano;
            return `Ataque realizado, causando ${dano} de dano`;
        }
        this.personagem.vida -= dano;
        return `${this.inimigo.nome} te atacou, causando ${dano} de dano`;
    }

    /**
     * Realiza o turno do inimigo, fazendo-o atacar o personagem.
     * @returns {string} - Mensagem descrevendo o resultado do ataque do inimigo.
     */
    turnoInimigo() {
        return this.ataque(this.inimigo.atacar());
    }
}

export default Combate;
