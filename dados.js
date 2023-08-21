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
}

export default Dados;