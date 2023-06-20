function mordeMelancia() {
    document.getElementById("melanciainteira").src="melanciacomida.jpg";

}
function melanciaInteira() {
    document.getElementById("melanciainteira").src="melanciainteira.jpg";
}

function calcularIMC() {
    var peso = parseFloat(document.getElementById("cPeso").value);
    var altura = parseFloat(document.getElementById("cAltura").value);
    imc = peso / (altura*altura);
    
    document.getElementById("cIMC").value = imc.toFixed(2);
}
    
function calcularDieta() {
    var nivelAtividade = document.getElementById("cAtividadeFisica").value;
    var objetivo = document.getElementById("cObjetivo").value;
    var peso = parseFloat(document.getElementById("cPeso").value);

    var fatorAtividade = 0;
      switch (nivelAtividade) {
        case "sedentario":
          fatorAtividade = 1.2;
          break;
        case "leve":
          fatorAtividade = 1.375;
          break;
        case "moderado":
          fatorAtividade = 1.55;
          break;
        case "ativo":
          fatorAtividade = 1.725;
          break;
        case "muitoativo":
          fatorAtividade = 1.9;
          break;
        default:
          fatorAtividade = 1.2;
          break;
      }

    var fatorObjetivo = 0;
      switch (objetivo) {
        case "perder":
          fatorObjetivo = 20;
          break;
        case "manter":
          fatorObjetivo = 25;
          break;
        default:
          fatorObjetivo = 30;
          break;
      }

    var necessidadeCaloricaDiaria = fatorAtividade * fatorObjetivo * peso;

    document.getElementById("cDieta").value = necessidadeCaloricaDiaria.toFixed(0);
    }
      
function Enviar() {
  var nome = document.getElementById("cNome");

  if (processaNome(nome) == true)
    window.alert("Obrigado, " + nome.value + "! Sua mensagem foi encaminhada com sucesso!");
  else
    window.alert("Cadastro com Falha");
}

function processaNome(nome) {
  nome.value = nome.value.toUpperCase();
  
  if (nome.value.length == 0)
    return false;
  else
    return true;
}
