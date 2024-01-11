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

// src/teste.ts
var teste_exports = {};
__export(teste_exports, {
  createUser: () => createUser
});
module.exports = __toCommonJS(teste_exports);
function saveUserToDatabase(user) {
  console.log(user);
}
saveUserToDatabase({
  name: "Wiliamis",
  age: 26
});
function createUser(dataUser) {
  console.log(dataUser);
}
createUser({
  name: "Wiliamis",
  email: "oliveirawiliamis34@gmail.com",
  password: "12345678",
  telephone: 99999999
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createUser
});
