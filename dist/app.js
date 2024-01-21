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
var import_express5 = __toESM(require("express"));
var import_express_handlebars = require("express-handlebars");
var import_path = __toESM(require("path"));

// src/routes/main.routes.ts
var import_express4 = require("express");

// src/routes/home.ts
var import_express = require("express");
var router = (0, import_express.Router)();
router.get("/", (req, res) => {
  return res.render("home");
});
var home_default = router;

// src/routes/user.ts
var import_express2 = require("express");
var router2 = (0, import_express2.Router)();
router2.get("/", (req, res) => {
  return res.render("users");
});
var user_default = router2;

// src/routes/login.ts
var import_express3 = require("express");
var router3 = (0, import_express3.Router)();
router3.get("/", (req, res) => {
  return res.send("Rota de login");
});
var login_default = router3;

// src/routes/main.routes.ts
var router4 = (0, import_express4.Router)();
router4.use("/", home_default);
router4.use("/user", user_default);
router4.use("/login", login_default);
var main_routes_default = router4;

// src/app.ts
var App = class {
  constructor() {
    this.app = (0, import_express5.default)();
    this.config();
    this.routes();
  }
  config() {
    this.app.use(import_express5.default.static(__dirname + "/public"));
    this.app.set("views", import_path.default.join(__dirname, "views"));
    this.app.engine(".hbs", (0, import_express_handlebars.engine)({ extname: ".hbs" }));
    this.app.set("view engine", ".hbs");
    this.app.use(import_express5.default.json());
    this.app.use(import_express5.default.urlencoded({ extended: true }));
  }
  routes() {
    this.app.use("/", main_routes_default);
    this.app.use("*", (req, res) => res.render("404"));
  }
  listen(port) {
    this.app.listen(port, () => console.log("Server is running on port http://localhost:3335"));
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  App
});
