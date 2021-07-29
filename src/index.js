const rl = require('./interface/readline');
const options = require('./data/data');
const machineOptions = require('./controller/class/machineOptions');
const User = require('./controller/class/user')

let usuario = new User({
    opt: options, 
    name: 'Maria', 
    selected:'Pedra'}).game();

console.log(usuario);
/*
rl.question('Você está gostando de POO?', resposta =>{
    console.log(`Sua resposta foi ${resposta}`);
    rl.close();
})*/