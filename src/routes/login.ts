import { Router } from "express";

const router = Router();

<<<<<<< HEAD
router.get('/', (req, res) => {
    return res.render('login');
=======
router.get("/", (req, res) => {
    return res.render("login");
>>>>>>> d46763a83ae58add719d895fe6c7a7b92c007ca9
});

export default router; 