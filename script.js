//Exercício 1
for(let i = 1; i < 11; i++){
    console.log(`${i} x 10 =`,((i)*10))
}

//Exercício 2
let notas = [10, 10, 5];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}
let media = soma/notas.length
console.log(`A sua média é ${media}`);

