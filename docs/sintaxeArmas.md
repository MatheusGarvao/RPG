# **Sintaxe do Objeto das Armas**

Este tópico aborda a sintaxe que deve ser seguida ao definir o objeto das armas. Através dessas diretrizes, é possível garantir uma atribuição precisa e coerente das características das armas.

## **Passos Essenciais:**

Para realizar a atribuição correta das armas, siga uma ordem específica:

### **Tipo:**
O primeiro caractere desempenha o papel de operador do cálculo.

Os caracteres subsequentes indicam a ação a ser executada:

- `+1d`: Adição de 1 dado do valor do crítico da arma (resultado do dano somado ao valor do dado).
- `*2d`: Multiplicação por 2 dados do valor do crítico da arma (resultado do dano multiplicado pelos resultados dos dois dados).
- `+3d2`: Adição de 3 dados do valor de 2 (resultado do dano somado aos resultados dos três dados).

## **Operadores e Dados:**

Se o operador estiver isolado, ele executará a operação diretamente, sem envolver aleatoriedade. Por exemplo:

- `*` ou `+`: Esses operadores executarão a operação com o dado sendo lançado e, em seguida, adicionado ou multiplicado pelo valor do dano.

Ao adicionar outro operador, associe um número à arma, seja um número fixo ou um valor de dado. Por exemplo:

- `+1d*2`
- `*2d*1d`

Caso inclua um número após o `d`, ele será interpretado como o valor do dado a ser rolado. Na ausência de um número após o `d`, o valor do dado será igual ao valor do dano.

Exemplo:

- `*2d+2d2` = (resultado do dano multiplicado pelo primeiro dado do valor do crítico da arma, somado ao resultado de 2 dados de valor 2).

## **Valor do Dano:**

O valor do dano deve ser sempre do tipo `number`. Tenha em mente que usar apenas a letra `d` resultará em um erro.

## **Ampliando as Possibilidades:**

Você pode incorporar várias operações conforme necessário. Por exemplo:

- `*2d+2d2*5`

Essa estrutura flexível permitirá a criação de armas com atributos diversificados e empolgantes.