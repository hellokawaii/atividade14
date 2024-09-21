class Funcionário{
    constructor(nome,idade,cargo){
        this.nome = nome
        this.idade = idade
        this.cargo = cargo
    }

    seApresentar(){
        console.log('Me chamo ' + this.nome + ' tenho ' + this.idade + " anos e sou " + this.cargo)
    }

    programar(){
        console.log('A linguagem que uso para programar é ' + this.linguagem)    
    }

    gerenciar(){
        console.log('A minha função é gerenciar o departamento ' + this.departamento)
    }

    trabalhar(){
        const cargo1 = this.cargo
        switch(cargo1){
            case "Desenvolvedor":
                this.programar()
                break
            case "Gerente":
                this.gerenciar()
                break
                default:               
        }
    }
}
         
class Desenvolvedor extends Funcionário{
    constructor(nome,idade,cargo,linguagem){
        super(nome,idade,cargo)
        this.linguagem = linguagem
    }

    programar(){
        console.log('Desenvolvo usando ' + this.linguagem)
    }
}


class Gerente extends Funcionário{
    constructor(nome,idade, cargo,departamento){
        super(nome,idade, cargo)
        this.departamento = departamento
    }

    gerenciar(){
        console.log('A minha função é gerenciar o departamento ' + this.departamento)
    }
}


p2 = new Desenvolvedor("Roberto","30","Desenvolvedor","Phyton")
p2.seApresentar()
p2.trabalhar()

p1 = new Gerente("Fábio","20","Gerente","Comercial")
p1.seApresentar()
p1.trabalhar()
