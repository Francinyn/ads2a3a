class Funcionario{
    constructor(pNome, pSalario){
        this.Nome = pNome;
        this.Salario = pSalario;
    }

    get Nome() {return this.Nome;}
    set Nome(pNome) {this.nome = pNome;}

    get Salario() {return this.Salario;}
    set Salario(pSalario) {return this.salario = pSalario;}

        calcularSalario(){

        }
}

class Vendedor extends Funcionario{
    constructor(pNome, pSalario, pComissao){
        super(pNome, pSalario);
        this.Comissao = pComissao;
    }

    get Comissao() {return this.Comissao;}
    set Comissao(pComissao) {return this.comissao = pComissao;}

    calcularSalario(){
        return this.salario + this.comissao;
    }
}

class OperadorCaixa extends Funcionario{
    constructor(pNome, pSalario, pBonus){
        super(pNome, pSalario);
        this.Bonus = pBonus;
    }

    get Bonus() {return this.Bonus;}
    set Bonus(pBonus) {return this.bonus = pBonus;}

    calcularSalario(){
        return this.salario + this.bonus;
    }
}


var vendedor = new Vendedor("Francinyn", 1600, 400);
cosole.log(vendedor.calcularSalario());

var opcaixa = new OperadorCaixa("Larissa", 1400, 100);
console.log(opcaixa.calcularSalario());
