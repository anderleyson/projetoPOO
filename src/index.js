const options = require('./data/data');
const machineOptions = require('./controller/class/machineOptions');
const User = require('./controller/class/user')

let jogar = new User({opt: options}).game();

jogar;
