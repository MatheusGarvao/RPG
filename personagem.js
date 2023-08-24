/**
 * @module Personagem
 */

import Arma from './arma.js';
import Dados from './dados.js';

/**
 * Classe Personagem
 * @classdesc Representa um personagem do jogo, com suas características e ações.
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
        this.setNome(personagem.nome);
        this.setArma(personagem.arma);
        this.setVida(parseInt(personagem.vida));
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
        // Adiciona um valor aleatório entre 1 e 20 à vida inicial do personagem.
        this.vida = this.dados.rodarDados(20) + vida;
    }

    /**
     * Realiza um ataque utilizando a arma do personagem.
     * @method
     * @returns {number} O valor de dano causado pelo ataque.
     */

    /**
     * To do - critico ou erro critico, sistema de chances de dados.
     */
    atacar() {
        //let numero = this.rodarDados(20);
        return this.arma.atacar();
        //return (numero === 1) ? 0 : (numero === 20) ? this.arma.critico() : this.arma.atacar();
    }
}

export default Personagem;
