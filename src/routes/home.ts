import { Router } from "express";

const router = Router();

// comentário
router.get("/", (req, res) => {
    return res.render("home");
});

export default router;