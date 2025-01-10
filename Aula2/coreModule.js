/*Sao modulos i ternos do node*/

const fs = require('fs')
fs.readFile('arquivo.txt' , 'utf-8' , (err,dados)=>{
    console.log(err)
    console.log(dados)
})