// STUDIES ON STACKS

//Construa um programa que verifica se uma palavra é ou não um polidromo
//*Polidromo é uma palavra que não muda quando é escrita de traz pra frente, tipo Bob, que continua sendo bob de trás pra frente

let letters = [] //array que armazenará as letras da palavra

var word = 'bob'
var reverseWord = "";

//Criamos um laço de repetição para cada letra da palavra armazenada em var word
for (var i = 0; i < word.length; i++) {
  letters.push(word[i]) //adicionamos cada letra de word dentro da array letters com o método push, que adiciona o elemento na array
}

for (var i = 0; i < word.length; i++) {
  //
  reverseWord += letters.pop() //o método pop remove o último elemento de uma array
}

if (reverseWord === word) {
  console.log(word + ' é um Palíndromo')
} else {
  console.log(word + ' não é um Palíndromo')
}
