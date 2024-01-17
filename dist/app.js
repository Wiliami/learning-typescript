"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/app.ts
var app_exports = {};
__export(app_exports, {
  App: () => App
});
module.exports = __toCommonJS(app_exports);
var import_express2 = __toESM(require("express"));

// src/routes/user.ts
var import_express = require("express");
var router = (0, import_express.Router)();
router.get("/", (req, res) => {
  return res.json({ message: "Ol\xE1, mundo!" });
});
var user_default = router;

// src/app.ts
var App = class {
  constructor() {
    this.app = (0, import_express2.default)();
    this.config();
    this.routes();
  }
  config() {
    this.app.use(import_express2.default.json());
    this.app.use(import_express2.default.urlencoded({ extended: true }));
  }
  routes() {
    this.app.use("/user", user_default);
  }
  listen(port) {
    this.app.listen(port, () => console.log("Server is running on port htpp://localhost:3335"));
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  App
});
