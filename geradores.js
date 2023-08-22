import CarregarObjetos from "./carregarObjetos.js";
import Dados from "./dados.js";
import Personagem from "./personagem.js";

/**
 * Classe Gerador.
 * @classdesc Responsável por criar personagens e inimigos com características aleatórias.
 */
class Gerador {
    /**
     * Cria uma instância de Gerador.
     */
    constructor() {
        /**
         * Instância do Dados para geração de números aleatórios.
         * @type {Dados}
         */
        this.dados = new Dados();

        /**
         * Instância do CarregarObjetos para carregar dados de objetos.
         * @type {CarregarObjetos}
         */
        this.carregador = new CarregarObjetos();

        /**
         * Lista de armas carregadas a partir do JSON de armas.
         * @type {Array}
         */
        this.armas = this.carregador.carregarJson(1);
    }

    /**
     * Gera um inimigo com características aleatórias.
     * @returns {Personagem} Uma instância de Personagem representando o inimigo gerado.
     */
    gerarInimigo() {
        const inimigoIndex = this.dados.gerarAleatorio(this.carregador.carregarJson(3).length);
        const inimigoData = this.carregador.carregarJson(3)[inimigoIndex];

        return new Personagem({
            nome: inimigoData.nome,
            arma: this.gerarArma(),
            vida: parseInt(inimigoData.vida)
        });
    }

    /**
     * Gera um personagem com características aleatórias.
     * @param {string} [nome="Desconhecido"] - O nome do personagem a ser gerado.
     * @returns {Personagem} Uma instância de Personagem representando o personagem gerado.
     */
    gerarPersonagem(nome = "Desconhecido") {
        return new Personagem({
            nome: nome.trim(),
            arma: this.gerarArma(),
            vida: 10
        });
    }

    /**
     * Gera uma arma aleatória a partir da lista de armas carregada.
     * @returns {string} Uma string representando a arma aleatória gerada.
     */
    gerarArma() {
        const armaIndex = this.dados.gerarAleatorio(this.armas.length);
        return this.armas[armaIndex];
    }

    /**
     * Gera uma história aleatória a partir do JSON de histórias.
     * @param {number} [index=0] - O índice da história a ser gerada.
     * @returns {string} Uma string representando a história aleatória gerada.
     */
    gerarHistoria(index, proximos = null) {
        if (index > 0 && proximos === null) {
            return null;
        }

        const historias = this.carregador.carregarJson(2, index)[0];
        const numHistorias = Object.keys(historias).length;

        if (numHistorias === 0) {
            return null;
        }
        if (index === 0) {
            var historiaIndex = this.dados.rodarDados(numHistorias);
            return historias[historiaIndex];
        }

        return historias[proximos[this.dados.gerarAleatorio(proximos.length - 1)]];
    }
}

export default Gerador;
