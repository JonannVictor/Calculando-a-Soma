function calcularSoma() {
  //puxar os valores dos inputs e transforma-los em variaveis
  let num1 = parseFloat(document.getElementById('nu1').value);
  let num2 = parseFloat(document.getElementById('nu2').value);
  /* Verificar se o valor é um  número*/
  if (!isNaN(num1) &&  !isNaN(num2)) {
    /*calcular a soma*/
    let resultado = num1 + num2;
    /*mostrar o reesultado*/
    alert('A soma é: ' + resultado);
  }
  else {
    alert(`Valor Inválido`);
  }
}