# **Sintaxe de Escrita para o Arquivo `arquivos.json`**

Esta seção descreve a forma como deve ser estruturado o arquivo `arquivos.json`. Ao fazer isso, é fundamental ter em mente o contexto dos caminhos que serão percorridos pelo código em `index.js`, em vez de depender apenas da localização física do próprio `arquivos.json`.

## **Caminhos e Contexto:**

Para acessar os diferentes arquivos a partir de documentos específicos, é importante adotar os caminhos corretos em relação ao `index.js`:

- Para acessar o arquivo `arma.js` por exemplo, a partir do `index.js`, utilize "./utilidades/arma.js".

## **Arquivos JSON:**

O mesmo princípio se aplica aos arquivos JSON. Por exemplo, para acessar arquivos de armas, siga o padrão: "./armas/adaga.json".

## **Importância do `index.js`:**

Sempre leve em consideração o caminho definido no arquivo `index.js`. Isso garantirá uma organização consistente e um fluxo claro de acesso aos arquivos junto com a sintaxe correta, evitando quaisquer erros perante a isso durante a execução do código.
