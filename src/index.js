const rl = require('./interface/readline');
const options = require('./data/data');
const machineOptions = require('./controller/class/machineOptions')

let sorteio = new machineOptions({opt: options}).sort();

console.log(sorteio);
/*
rl.question('Você está gostando de POO?', resposta =>{
    console.log(`Sua resposta foi ${resposta}`);
    rl.close();
})*/