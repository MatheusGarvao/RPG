import fs from 'fs';

/**
 * Classe responsável por carregar objetos a partir de arquivos JSON.
 */
class CarregarObjetos {
    /**
     * Cria uma instância da classe CarregarObjetos.
     */
    constructor() {
        /**
         * Armazena os caminhos dos arquivos JSON.
         * @type {Object}
         */
        this.pastas = this.carregarCaminhos();
    }

    /**
     * Carrega objetos de arquivos JSON com base no tipo e índice fornecidos.
     * @param {number} [tipo=0] - O tipo de objeto a ser carregado.
     * @param {number|null} [indice=null] - O índice do objeto a ser carregado.
     * @returns {Array|Object} - Um array de objetos JSON ou um objeto contendo os caminhos dos arquivos.
     */
    carregarJson(tipo = 0, indice = null) {
        try {
            if (tipo === 0) {
                return this.pastas;
            }

            const caminhos = this.pastas[tipo];

            if (indice !== null) {
                const arquivo = fs.readFileSync(caminhos[indice], 'utf8');
                return [JSON.parse(arquivo)];
            } else {
                return caminhos.map(caminho => {
                    const arquivo = fs.readFileSync(caminho, 'utf8');
                    return JSON.parse(arquivo);
                });
            }
        } catch (error) {
            console.error('Erro ao carregar objetos do JSON:', error);
            return [];
        }
    }

    /**
     * Carrega os caminhos dos arquivos a partir do arquivo 'arquivos.json'.
     * @returns {Object} - Um objeto contendo os caminhos dos arquivos.
     */
    carregarCaminhos() {
        try {
            const caminhos = JSON.parse(fs.readFileSync('./arquivos.json', 'utf8'));
            return caminhos;
        } catch (error) {
            console.error('Erro ao carregar caminhos do JSON:', error);
            return {};
        }
    }
}

export default CarregarObjetos;
