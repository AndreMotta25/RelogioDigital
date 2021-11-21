const display = document.querySelector(".display");
function AtualizaHora() {
  // o objeto data tem que ficar aqui dentro pra poder pegar os minutos atualizados
  let data = new Date();
  display.innerText = `${corrigeNumero(data.getHours())}:${corrigeNumero(
    data.getMinutes()
  )}:${data.getSeconds()}`;
}
// fiz isso pq os numeros menor que 10 ficam somente com um algarismo(culpa do date)
function corrigeNumero(numero) {
  if (numero < 10) {
    return "0" + numero;
  }
  return numero;
}

AtualizaHora();
// antes o setInterval estava dentro da função AtualizaHora, mas assim o container da hora
// ficava com 00:00, isso pq o set interval leva 1s pra executar
setInterval(AtualizaHora, 1000);
