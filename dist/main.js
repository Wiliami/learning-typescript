"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/main.ts
var import_express = __toESM(require("express"));

// src/teste.ts
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

// src/products.ts
var product = {
  item: "L\xE1pis",
  value: 20,
  description: "Produto escolar"
};
console.log(product);

// src/main.ts
var app = (0, import_express.default)();
app.use((0, import_express.json)());
app.get("/", (req, res) => {
  return res.json({ product, createUser });
});
app.listen(3334, () => {
  console.log("\u{1F680} Server started on http://localhost:3334");
});
