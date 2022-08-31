const primeiroNumero = Number(prompt("De-me um número."))
const segundoNumero = Number(prompt("De-me um segundo número."))

console.log(primeiroNumero > segundoNumero, primeiroNumero === segundoNumero, (primeiroNumero % segundoNumero) === 0,
            (segundoNumero % primeiroNumero) === 0)