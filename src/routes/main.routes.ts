import { Router } from "express";
import home from "../routes/home";
import login from "../routes/login";
import cadastro from "../routes/register";

const router = Router();

router.use("/", home);
router.use("/login", login);
router.use("/cadastro", cadastro);

export default router;