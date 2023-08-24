# Sintaxe do objeto das armas

para realizar a atribuição correta das armas, deve-se obedecer uma ordem:

tipo ->

primeiro caractere deve ser o operador do calculo

próximos caracteres deve ser o que vai fazer:

+1d = 1 dado (resultado do dano mais o primeiro dado)
*2d = 2 dados (resultado do dano vezes o primeiro dado vezes o segundo dado)
+3d = 3 dados (resultado do dano mais o primeiro, segundo e terceiro dado)

se o operador estiver isolado, significa que ele não vai ter outra função além de realizar o calculo direto sem nenhuma aleatoriedade.
por exemplo

\* ou + : ele ira realizar a operação com o dado sendo rodado e adicionar ou multiplicar com o valor do dano.

Caso for colocar algum outro operador, deve-se atribuir um número para a sua arma, seja um número fixo ou um dado, por exemplo:
(ignore o caractere de escape)

+1d*2
*2d\*1d

caso coloque algum número após o d, ele deve interpretar como o valor do dado a ser rodado, se não tiver nenhum, o dado é usado o valor do dano

por exemplo:

*2d+2d2 = (resultado do dano vezes o primeiro dado vezes o segundo dado mais o resultado de 2 dados de 2.)

dano deve ser do tipo number.

se colocar somente d ele não vai identificar e vai tratar como erro.