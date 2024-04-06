document.write("<h2>Entrada de dados</h2>");
  var numero1 = prompt("Digite o numero 1");
  var numero2 = prompt("Digite o numero 2");

  document.write("Número 1 = " + numero1 + "<br>");
  document.write("Número 2 = " + numero2 + "<br>") ;

  document.write("<h2>Operações Aritméticas</h2>");
  var resultado;
    
  resultado=Number(numero1)+Number(numero2);
  document.write("A soma dos números é " + resultado +"<br>");

  resultado=Number(numero1)-Number(numero2);
  document.write("A diferença dos números é " + resultado +"<br>");

  resultado=Number(numero1)*Number(numero2);
  document.write("O produto dos números é " + resultado +"<br>");

  resultado=Number(numero1)/Number(numero2);
  document.write("A divisão dos números é " + resultado +"<br>");