class Pessoa {
    constructor(name: number, age: number) {
        this.name = name
        this.age = age
    }

    cumprimentar() {
        console.log(`Olá, ${this.name} sua idade é ${this.age} anos`);
    }
}

let pessoa = new Pessoa('Wiliamis', 26);
pessoa.cumprimentar();
console.log(pessoa);