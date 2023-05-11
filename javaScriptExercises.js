const repeatString = function(word, times) {
  let result = ''; // criada uma única string vazia
  if (times < 0) { // O valor de repetições que o usuário deseja não pode ser negativo
    return "ERROR"
  }
  for (var i = 0; i < times; i++) {
      result += ' ' + word;
  }
  return result;
};
console.log(repeatString('Doug', 5))

const reverseString = function(str) {
  let temp = ''; // Variável criada para armazenar o resultado
  for (i = str.length - 1; i >= 0; i--) {
    temp += str[i]
  }
  return temp;
}

console.log(reverseString("Douglas"))
