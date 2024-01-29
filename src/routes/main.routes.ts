<<<<<<< HEAD
import { Router } from 'express';
import home from '../routes/home';
import login from '../routes/login';
import cadastro from '../routes/register';

const router = Router();

router.use('/', home);
router.use('/login', login);
router.use('/cadastro', cadastro);
=======
import { Router } from "express";
import home from "./home";
import login from "./login";

const router = Router();

router.use("/", home);
router.use("/login", login);
>>>>>>> d46763a83ae58add719d895fe6c7a7b92c007ca9

export default router;