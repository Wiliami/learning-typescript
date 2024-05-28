import { Router } from "express";
import home from "../routes/home";
import login from "../routes/login";
import cadastro from "../routes/register";
import user from "../routes/user";

const router = Router();

router.use("/", home);
router.use("/login", login);
router.use("/cadastro", cadastro);
router.use("/dashboard", user);


export default router;