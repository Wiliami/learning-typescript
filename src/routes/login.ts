import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    return res.send('Rota de login');
});

export default router; 