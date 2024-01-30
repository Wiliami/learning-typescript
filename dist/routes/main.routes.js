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

// src/routes/main.routes.ts
var main_routes_exports = {};
__export(main_routes_exports, {
  default: () => main_routes_default
});
module.exports = __toCommonJS(main_routes_exports);
var import_express5 = require("express");

// src/routes/home.ts
var import_express = require("express");
var router = (0, import_express.Router)();
router.get("/", (req, res) => {
  return res.render("home");
});
var home_default = router;

// src/routes/login.ts
var import_express2 = require("express");
var router2 = (0, import_express2.Router)();
router2.get("/", (req, res) => {
  return res.render("login");
});
var login_default = router2;

// src/routes/register.ts
var import_express3 = require("express");
var router3 = (0, import_express3.Router)();
router3.get("/", (req, res) => {
  return res.render("cadastro");
});
var register_default = router3;

// src/routes/user.ts
var import_express4 = require("express");
var router4 = (0, import_express4.Router)();
router4.get("/", (req, res) => {
  return res.render("dashboard");
});
var user_default = router4;

// src/routes/main.routes.ts
var router5 = (0, import_express5.Router)();
router5.use("/", home_default);
router5.use("/login", login_default);
router5.use("/cadastro", register_default);
router5.use("/dashboard", user_default);
var main_routes_default = router5;
