<i>Métodos modificadores são métodos que, além de retornar um valor, modificam a array original.</i>

<strong>.sort</strong>: ordena os elementos do próprio array e retorna o array.

<strong>sintaxe</strong>: <i>[array].sort(funcaoDeComparacao*)</i> 


<strong>.unshift</strong>: adiciona elementos ao início do array e retorna o length.

<strong>.push</strong>: adiciona elementos ao final do array e retorna o length.

<strong>.splice</strong>: permite inserir novos elementos no meio de um array, mas também permite excluir e substituir elementos já existente.

<strong>sintaxe exluir elementos com splice</strong>: <i>[array].splice(position, num**)</i> 

<strong>sintaxe inserir elementos com splice</strong>: <i>[array].splice(position,  0, new_Element_1, new_Element_2, ... ***)</i> 


*caso seja omitida, o array é ordenado de acordo com a pontuação de código Unicode de cada caracter.

**o argumento position determina a posição do primeiro item a ser excluido e o argumento num determina o numero de elementos.

*** o argumento position determina a posição do array em que os novos elementos serão inseridos, o segundo argumento, que é o 0, dá o comando para que nenhum elemento seja excluido e o terceiro argumento são os novos valores.