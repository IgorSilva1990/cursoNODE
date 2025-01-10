const minimist = require(minimist)

console.log(process.argv)

const argumentos = process.argv.splice(2)

console.log(argumentos)

let chave = argumentos[0].split('=')[0]

let valor = argumentos[0].split('=')[1]

console.log(chave,valor)

let argumentosM = minimist(process.argv.splice(2))

console.log(argumentosM)
