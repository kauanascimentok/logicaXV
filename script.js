let numeroAleatorio = git (Math.random() * 100) + 1;
let tentativas = 0;
let acertou = false;

while (!acertou) {
  let palpite = (prompt("Adivinhe o número (entre 1 e 100):"));
  tentativas++;

  if (palpite === numeroAleatorio) {
    alert("Parabéns! Você acertou o número em " + tentativas + " tentativas.");
    acertou = true;
  } else if (palpite > numeroAleatorio) {
    alert("O palpite é muito alto. Tente novamente.");
  } else {
    alert("O palpite é muito baixo. Tente novamente.");
  } 
}

let jogarNovamente = confirm("Deseja jogar novamente?");
if (jogarNovamente) {
location.reload();
}