let numero = parseInt(prompt('Informe um número');
let resposta = 0;

if (isNaN (numero)) {
    resposta = 'Não é um número';
} else if (numero > 0) {
    resposta = 'O número é positivo';
} else if (numero < 0) {
    resposta = 'O número é negativo';
} else {
    resposta = 'O número é Neutro';
}

alert(resposta);