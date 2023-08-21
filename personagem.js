import Arma from './arma.js';
import Dados from './dados.js';

/**
 * Classe Personagem
 * @classdesc A classe Personagem representa um personagem do jogo, com suas características e ações.
 */
class Personagem {
    /**
     * Cria uma instância de Personagem.
     * @constructor
     * @param {Object} personagem - Um objeto contendo informações sobre o personagem.
     */
    constructor(personagem) {
        this.dados = new Dados();
        this.setNome(personagem.nome);
        this.setArma(personagem.arma);
        this.setVida(personagem.vida);
    }

    /**
     * Define o nome do personagem.
     * @param {string} nome - O nome do personagem.
     */
    setNome(nome) {
        /**
         * O nome do personagem.
         * @type {string}
         */
        this.nome = nome;
    }

    /**
     * Define a arma do personagem.
     * @param {Object} arma - Um objeto contendo informações sobre a arma do personagem.
     */
    setArma(arma) {
        /**
         * A arma equipada pelo personagem.
         * @type {Arma}
         */
        this.arma = new Arma(arma);
    }

    /**
     * Define a vida do personagem.
     * @param {number} vida - A quantidade de vida do personagem.
     */
    setVida(vida) {
        /**
         * A quantidade total de vida do personagem.
         * @type {number}
         */
        this.vida = this.dados.rodarDados(20) + vida;
    }

    /**
     * Realiza um ataque utilizando a arma do personagem.
     * @method
     * @returns {number} O valor de dano causado pelo ataque.
     */
    atacar() {
        return this.arma.atacar();
    }
}