const machineOptions = require('./machineOptions');
const options = require('../../data/data');
const inquirer = require('inquirer');
const gameby = require('../../data/gameby');

class User extends machineOptions{

    constructor({opt, name, selected}){
        super({opt});
        this._name = name;
        this._selected = selected;
        this._sort = this.sort();
    }
    set name(string){
        this._name = string;
    }
    get name(){
        return this._name;
    }
    set selected(string){
        this._selected = string;
    }
    get selected(){
        return this._selected;
    }
    logic(){
        if(this._selected === this._sort){
            return `${this._name}, você empatou - usuário: ${this._selected} | máquina: ${this._sort}`;
        }else if((this._selected === 'Pedra' && this._sort === 'Tesoura') || (this._selected === 'Papel' && this._sort === 'Pedra') || (this._selected === 'Tesoura' && this._sort === 'Papel')){
            return `${this._name}, você ganhou - usuário: ${this._selected} | máquina: ${this._sort}`
        }else {
            return `${this._name}, você perdeu - usuário: ${this._selected} | máquina: ${this._sort}`
        }
    }
    game(){
        console.info(gameby);
        return inquirer
            .prompt([
                {
                    name: 'name',
                    message: 'Qual o seu nome?',
                    default: 'Jogador'
                },
                {
                    type:'list',
                    name: 'Jokenpo',
                    message: 'Selecione uma destas opções',
                    choices: options
                }
            ]).then((answers)=> {
                this._name = answers.name;
                this._selected = answers.Jokenpo;
                console.info(`${this.logic()}`)
            })
    }

}
module.exports = User;