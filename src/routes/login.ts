import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    return res.render("login");
});

export default router; 