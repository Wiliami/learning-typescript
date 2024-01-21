import { Router } from 'express';
import home from './home';
import user from './user';
import login from './login';

const router = Router();

router.use('/home', home);
router.use('/user', user);
router.use('/login', login);

export default router;