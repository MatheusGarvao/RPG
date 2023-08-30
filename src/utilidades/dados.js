/**
 * Classe Dados
 * @classdesc A classe Dados é responsável por simular a rolagem de dados aleatórios.
 */
class Dados {
    /**
     * Cria uma instância de Dados.
     * @constructor
     */
    constructor() { }

    /**
     * Rola um dado para obter um valor aleatório.
     * @method
     * @param {number} dado - O número de faces do dado a ser rolado.
     * @returns {number} Um número aleatório entre 1 e o número de faces do dado (inclusive).
     * @throws {Error} Lança um erro se o parâmetro dado não for válido.
     */
    rodarDados(dado) {
        /**
         * Gera um número aleatório entre 1 e o número de faces do dado (inclusive).
         * @private
         * @param {number} faces - O número de faces do dado.
         * @returns {number} Um número aleatório entre 1 e o número de faces do dado (inclusive).
         */
        function gerarNumeroAleatorio(faces) {
            return Math.floor(Math.random() * faces) + 1;
        }

        if (typeof dado !== 'number' || dado <= 0 || !Number.isInteger(dado)) {
            throw new Error("O parâmetro 'dado' deve ser um número inteiro positivo maior que zero.");
        }

        return gerarNumeroAleatorio(dado);
    }

/**
 * Gera um número aleatório entre 0 (inclusive) e o número fornecido (exclusive).
 * @method
 * @param {number} numero - O número máximo para gerar um valor aleatório.
 * @returns {number} Um número aleatório entre 0 (inclusive) e o número fornecido (exclusive).
 * @throws {Error} Lança um erro se o parâmetro numero não for válido.
 */
 gerarAleatorio(numero) {
    /**
     * Gera um número aleatório entre 0 (inclusive) e o número fornecido (exclusive).
     * @private
     * @param {number} max - O número máximo para gerar um valor aleatório.
     * @returns {number} Um número aleatório entre 0 (inclusive) e o número fornecido (exclusive).
     */
    function gerarNumeroAleatorio(max) {
        return Math.floor(Math.random() * max);
    }

    if (typeof numero !== 'number' || numero < 0 || !Number.isInteger(numero)) {
        throw new Error("O parâmetro 'numero' deve ser um número inteiro positivo maior ou igual a zero.");
    }
    
    return gerarNumeroAleatorio(numero);
}
}

export default Dados;