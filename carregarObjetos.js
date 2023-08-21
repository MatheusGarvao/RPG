import fs from 'fs';

/**
 * Classe para carregar objetos a partir de arquivos JSON.
 */
class CarregarObjetos {
    /**
     * Constrói uma nova instância da classe CarregarObjetos.
     * Carrega os caminhos de arquivos JSON no atributo "pastas".
     */
    constructor() {
        /**
         * Um objeto que contém os caminhos para os arquivos JSON.
         * @type {Object}
         */
        this.pastas = this.carregarJson();
    }

    /**
     * Carrega objetos a partir de um JSON.
     * @param {number} tipo - O tipo de objeto a ser carregado (0 para caminhos possíveis, 1 para arma, 2 para história).
     * @param {number|null} indice - O índice do objeto a ser carregado ou null para carregar todos.
     * @returns {Array} - Um array contendo os objetos carregados.
     */
    carregarJson(tipo = 0, indice = null) {
        if (tipo === 0) {
            try {
                /**
                 * Um objeto contendo os caminhos para os arquivos JSON.
                 * @type {Object}
                 */
                const caminhos = JSON.parse(fs.readFileSync('./arquivos.json', 'utf8'));
                return caminhos;
            } catch (error) {
                console.error('Erro ao carregar caminhos do JSON:', error);
                return {};
            }
        }

        try {
            /**
             * O conteúdo do arquivo JSON a ser carregado.
             * @type {string}
             */
            const arquivo = fs.readFileSync(this.pastas[tipo][indice], 'utf8');

            /**
             * Os objetos carregados do arquivo JSON.
             * @type {Array}
             */
            const objetos = JSON.parse(arquivo);

            if (indice !== null) {
                return [objetos];
            }

            return objetos;
        } catch (error) {
            console.error('Erro ao carregar objetos do JSON:', error);
            return [];
        }
    }
}

export default CarregarObjetos;
