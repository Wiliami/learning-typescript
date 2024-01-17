"use strict";

// src/Pessoa.ts
var Pessoa = class {
  constructor(nome, age) {
    this.name = nome;
    this.age = age;
  }
  cumprimentar() {
    console.log(`Ol\xE1, ${this.name} sua idade \xE9 ${this.age}`);
  }
};
var pessoa = new Pessoa("Wiliamis", 26);
pessoa.cumprimentar();
console.log(pessoa);
