/**
 * @module Personagem
 */

import Arma from './arma.js';
import Dados from './dados.js';

/**
 * Representa um personagem do jogo, com suas características e ações.
 */
class Personagem {
    /**
     * Cria uma instância de Personagem.
     * @constructor
     * @param {Object} personagem - As informações iniciais do personagem.
     * @param {string} personagem.nome - O nome do personagem.
     * @param {Object} personagem.arma - As informações da arma do personagem.
     * @param {number} personagem.vida - A quantidade inicial de vida do personagem.
     */
    constructor(personagem) {
        /**
         * Instância da classe Dados utilizada para gerar valores aleatórios.
         * @type {Dados}
         * @private
         */
        this.dados = new Dados();

        /**
         * O nome do personagem.
         * @type {string}
         */
        this.nome = '';

        /**
         * A arma equipada pelo personagem.
         * @type {Arma}
         */
        this.arma = null;

        /**
         * A quantidade total de vida do personagem.
         * @type {number}
         */
        this.vida = 0;

        this.setNome(personagem.nome);
        this.setArma(personagem.arma);
        this.setVida(personagem.vida);
    }

    /**
     * Define o nome do personagem.
     * @param {string} nome - O nome do personagem.
     */
    setNome(nome) {
        this.nome = nome;
    }

    /**
     * Define a arma do personagem.
     * @param {Object} arma - As informações da arma do personagem.
     */
    setArma(arma) {
        this.arma = new Arma(arma);
    }

    /**
     * Define a vida do personagem.
     * @param {number} vida - A quantidade de vida do personagem.
     */
    setVida(vida) {
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

export default Personagem;
