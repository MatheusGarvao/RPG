import Dados from './dados.js';

/**
 * Classe Arma
 * @classdesc A classe Arma é responsável por criar objetos de arma com propriedades específicas para serem usadas por personagens.
 */
class Arma {
    /**
     * Cria uma instância de Arma.
     * @constructor
     * @param {Object} arma - Um objeto contendo informações sobre a arma.
     * @throws {Error} Lança um erro se o parâmetro não for um objeto válido.
     */
    constructor(arma) {
        if (typeof arma !== 'object' || arma === null) {
            throw new Error("O parâmetro 'arma' não foi fornecido como um objeto válido.");
        }

        /**
         * A instância da classe Dados usada para rolagens de dados.
         * @type {Dados}
         */
        this.dados = new Dados();

        this.setTipo(arma.tipo);
        this.setDado(arma.dado);
    }

    /**
     * Define o tipo da arma.
     * @param {string} tipo - O tipo da arma.
     */
    setTipo(tipo) {
        /**
         * O tipo da arma.
         * @type {string}
         */
        this.tipo = tipo;
    }

    /**
    * Define o dado de ataque da arma.
    * @param {string} dado - A representação do dado de ataque da arma (por exemplo, "d6").
    * @throws {Error} Lança um erro se a representação do dado não estiver no formato correto.
    */
    setDado(dado) {
        if (!/^d\d+$/.test(dado)) {
            throw new Error("A representação do dado deve estar no formato 'dX', onde X é o número de faces.");
        }

        /**
         * O número de faces do dado de ataque.
         * @type {number}
         */
        this.dado = parseInt(dado.substring(1));

        if (isNaN(this.dado)) {
            throw new Error("A representação do dado não contém um número de faces válido.");
        }
    }

    /**
     * Realiza um ataque com a arma.
     * @method
     * @returns {number} O resultado do ataque após a rolagem dos dados.
     */
    atacar() {
        return this.dados.rodarDados(this.dado);
    }
}

export default Arma;