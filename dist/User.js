"use strict";

// src/User.ts
var CreateUser = class {
  constructor(user) {
    this.user = user;
  }
  welcome() {
    console.log(`Dados do usu\xE1rio: ${JSON.stringify(this.user)}`);
  }
};
var dataUser = new CreateUser({
  name: "Wiliamis",
  email: "oliveirawiliamis34@gmail.com",
  password: "123"
});
dataUser.welcome();
