"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/database.ts
var database_exports = {};
__export(database_exports, {
  createUser: () => createUser,
  database: () => database,
  listUsers: () => listUsers
});
module.exports = __toCommonJS(database_exports);
function listUsers(user) {
  return user;
}
listUsers({
  name: "Wiliamis",
  age: 26,
  gender: "Masculino",
  salary: 1412,
  status: "Ativo"
});
var database = {
  name: "Wiliamis",
  age: 26,
  gender: "Male"
};
var createUser = {
  id: 1,
  name: "Teste",
  email: "user.teste@gmail.com",
  password: "123456"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createUser,
  database,
  listUsers
});
