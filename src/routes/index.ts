import { Router } from "express";
import home from "./home";
import login from "./login";
import cadastro from "./register";
import users from "./users";

const router = Router();

router.use("/", home);
router.use("/login", login);
router.use("/cadastro", cadastro);
router.use("/dashboard", users);


export default router;