import { Router } from "express";
import home from "./home";
import login from "./login";

const router = Router();

router.use("/", home);
router.use("/login", login);

export default router;